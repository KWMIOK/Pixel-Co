import { useCallback, useEffect, useMemo, useState } from "react";

const slides = ["visual-1", "visual-2", "visual-3"];
const INTERVAL_MS = 4500;
const START_INDEX = 1;

export default function HeroVisuals() {
  const extendedSlides = useMemo(
    () => [
      { id: "clone-start", className: slides[slides.length - 1] },
      ...slides.map((className) => ({ id: className, className })),
      { id: "clone-end", className: slides[0] },
    ],
    [],
  );

  const [trackIndex, setTrackIndex] = useState(START_INDEX);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrackIndex((current) => current + 1);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!enableTransition) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [enableTransition]);

  const handleTransitionEnd = useCallback(
    (event) => {
      if (event.target !== event.currentTarget || event.propertyName !== "transform") return;

      const lastIndex = extendedSlides.length - 1;

      if (trackIndex === lastIndex) {
        setEnableTransition(false);
        setTrackIndex(START_INDEX);
      } else if (trackIndex === 0) {
        setEnableTransition(false);
        setTrackIndex(slides.length);
      }
    },
    [trackIndex, extendedSlides.length],
  );

  return (
    <section className="hero-visuals" aria-hidden="true">
      <div className="container-fluid px-wide">
        <div className="visual-carousel">
          <div
            className={`visual-carousel-track${enableTransition ? "" : " no-transition"}`}
            style={{ "--active-index": trackIndex }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`visual-card ${slide.className}${index === trackIndex ? " is-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
