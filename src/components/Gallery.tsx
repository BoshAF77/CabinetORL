
"use client";

import { useCallback, useEffect, useState } from "react";
import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function Gallery() {
  const images = doctor.gallery;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => {
    setOpenIndex(null);
  }, []);

  const next = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );
  }, [images.length]);

  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  return (
    <section id="galerie" className="py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />

          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Galerie
          </h2>

          <p className="mt-4 max-w-[56ch] text-lg text-gris">
            Un aperçu du cabinet.
          </p>

          <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Agrandir : ${img.alt}`}
                className="group relative aspect-[4/3] overflow-hidden rounded"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </RevealSection>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label="Précédent"
            className="absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-xl text-white"
          >
            ‹
          </button>

          <div className="flex max-h-[85vh] max-w-[85vw] items-center justify-center">
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[85vh] max-w-[85vw] rounded object-contain"
            />
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Suivant"
            className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 text-xl text-white"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

