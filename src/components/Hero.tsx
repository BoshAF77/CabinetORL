
import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function Hero() {
  const { hero } = doctor;

  return (
    <section className="pb-24 pt-16">
      <div className="mx-auto grid max-w-wrap grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <RevealSection>
          <p className="mb-3.5 text-sauge">{hero.kicker}</p>

          <h1 className="mb-5 font-serif text-[clamp(2.4rem,5.2vw,3.6rem)] font-semibold leading-[1.08] text-bleu">
            {hero.headline}
          </h1>

          <p className="mb-8 max-w-[56ch] text-lg text-gris">
            {hero.lede}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="rounded-[3px] bg-bleu px-6 py-3.5 text-sm text-ivoire transition-colors hover:bg-sauge hover:text-bleu"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="rounded-[3px] border border-bleu/15 px-6 py-3.5 text-sm text-bleu transition-colors hover:border-sauge"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="relative aspect-[4/5] overflow-hidden rounded">
            <img
              src="/images/hero.jpg"
              alt={hero.photoAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

