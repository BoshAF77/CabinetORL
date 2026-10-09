
import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function CabinetSection() {
  const { cabinet } = doctor;

  return (
    <section id="cabinet" className="py-[88px]">
      <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <RevealSection>
          <div className="grid grid-cols-2 gap-3.5">
            <div
              className="row-span-2 overflow-hidden rounded"
              style={{ aspectRatio: "auto" }}
            >
              <img
                src="/images/cabinet-1.jpg"
                alt={cabinet.photos[0].alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded">
              <img
                src="/images/cabinet-2.jpg"
                alt={cabinet.photos[1].alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-square overflow-hidden rounded">
              <img
                src="/images/cabinet-3.jpg"
                alt={cabinet.photos[2].alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />

          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Le Cabinet
          </h2>

          <p className="mt-5 max-w-[56ch] text-lg text-gris">
            {cabinet.intro}
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

