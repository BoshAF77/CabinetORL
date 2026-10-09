import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="border-y border-bleu/10 bg-white py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Domaines d&apos;expertise
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {doctor.expertise.map((area) => (
              <div
                key={area.title}
                className="rounded border border-bleu/10 p-9 transition-all hover:-translate-y-1 hover:border-sauge"
              >
                <div className="mb-5 h-8 w-8 rounded-full bg-sauge/35" />
                <h3 className="mb-3 font-serif text-xl font-semibold text-bleu">
                  {area.title}
                </h3>
                <p className="text-sm text-gris">{area.description}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
