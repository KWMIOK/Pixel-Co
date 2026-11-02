import { useCallback, useEffect, useMemo, useState } from "react";

import carousel1 from "../assets/Carousel/Carousel1.jpeg";
import carousel2 from "../assets/Carousel/Carousel2.jpeg";
import carousel3 from "../assets/Carousel/Carousel3.jpeg";

const slides = [
  { id: "slide-1", src: carousel1, alt: "Carousel Image 1" },
  { id: "slide-2", src: carousel2, alt: "Carousel Image 2" },
  { id: "slide-3", src: carousel3, alt: "Carousel Image 3" },
];

const INTERVAL_MS = 4500;
const START_INDEX = 1;

export default function HeroVisuals() {
  const extendedSlides = useMemo(
    () => [
      { ...slides[slides.length - 1], id: "clone-start" },
      ...slides,
      { ...slides[0], id: "clone-end" },
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
                key={`${slide.id}-${index}`}
                className={`visual-card${index === trackIndex ? " is-active" : ""}`}
              >
                <img src={slide.src} alt={slide.alt} className="carousel-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}