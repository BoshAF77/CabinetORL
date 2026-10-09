
import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function DoctorSection() {
  const { biography, credentials } = doctor;

  return (
    <section id="docteur" className="py-[88px]">
      <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-6 md:grid-cols-[0.85fr_1.15fr]">
        <RevealSection>
          <div className="relative aspect-[3/4] overflow-hidden rounded">
            <img
              src="/images/doctor-profile.jpg"
              alt={biography.photoAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </RevealSection>

        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />

          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Le Docteur
          </h2>

          <p className="mt-5 max-w-[60ch] text-lg text-gris">
            {biography.intro}
          </p>

          <p className="mt-4 max-w-[60ch] text-sm italic text-gris/80">
            {biography.fullText}
          </p>

          <div className="mt-7 flex flex-col gap-2.5">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="border-l-2 border-sauge pl-4 text-sm text-gris"
              >
                {c.label}
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

