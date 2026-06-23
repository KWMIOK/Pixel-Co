import { useCallback, useEffect, useMemo, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { clients } from "../data/clients";

const SCROLL_SPEED = 32;

export default function TrustedBy() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const loopClients = useMemo(
    () => [
      ...clients.map((client) => ({ ...client, key: `${client.id}-a` })),
      ...clients.map((client) => ({ ...client, key: `${client.id}-b` })),
    ],
    [],
  );

  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  }, []);

  const normalizeOffset = useCallback(() => {
    const setWidth = setWidthRef.current;
    if (setWidth <= 0) return;

    if (isRtl) {
      while (offsetRef.current >= setWidth) offsetRef.current -= setWidth;
      while (offsetRef.current < 0) offsetRef.current += setWidth;
    } else {
      while (offsetRef.current <= -setWidth) offsetRef.current += setWidth;
      while (offsetRef.current > 0) offsetRef.current -= setWidth;
    }
  }, [isRtl]);

  const measureSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(".client-logo-card");
    const half = cards.length / 2;
    if (half === 0) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    let width = 0;

    for (let i = 0; i < half; i += 1) {
      width += cards[i].getBoundingClientRect().width;
      if (i < half - 1) width += gap;
    }

    setWidthRef.current = width;
    normalizeOffset();
    applyTransform();
  }, [applyTransform, normalizeOffset]);

  useEffect(() => {
    measureSetWidth();

    const track = trackRef.current;
    const carousel = carouselRef.current;
    if (!track || !carousel) return;

    const resizeObserver = new ResizeObserver(() => {
      measureSetWidth();
    });

    resizeObserver.observe(carousel);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [measureSetWidth]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tick = (timestamp) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = timestamp;
      }

      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (!isDraggingRef.current && !reducedMotion.matches) {
        const direction = isRtl ? 1 : -1;
        offsetRef.current += SCROLL_SPEED * delta * direction;
        normalizeOffset();
        applyTransform();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [applyTransform, isRtl, normalizeOffset]);

  const handlePointerDown = useCallback((event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    isDraggingRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    carouselRef.current?.setPointerCapture(event.pointerId);
    carouselRef.current?.classList.add("is-dragging");
  }, []);

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDraggingRef.current) return;

      const delta = event.clientX - dragStartXRef.current;
      offsetRef.current = dragStartOffsetRef.current + delta;
      normalizeOffset();
      applyTransform();
    },
    [applyTransform, normalizeOffset],
  );

  const endDrag = useCallback((event) => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    dragStartOffsetRef.current = offsetRef.current;
    carouselRef.current?.classList.remove("is-dragging");

    if (carouselRef.current?.hasPointerCapture(event.pointerId)) {
      carouselRef.current.releasePointerCapture(event.pointerId);
    }
  }, []);

  return (
    <section id="clients" className="section-numbers bg-black">
      <div className="container section-y section-compact">
        <p className="section-kicker">{t.clientsKicker}</p>
        <h2 className="display-section section-intro">{t.clientsIntro}</h2>
        <div className="clients-carousel-wrap">
          <div
            ref={carouselRef}
            className="clients-carousel"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
          >
            <div ref={trackRef} className="clients-carousel-track">
              {loopClients.map((client) => (
                <article key={client.key} className="client-logo-card">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo-image"
                    draggable={false}
                    style={client.logoScale ? { scale: client.logoScale } : undefined}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
