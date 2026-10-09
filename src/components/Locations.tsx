import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function Locations() {
  return (
    <section id="adresses" className="border-y border-bleu/10 bg-white py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Nos adresses
          </h2>

          <div className="mt-11 grid grid-cols-1 gap-7 md:grid-cols-2">
            {doctor.addresses.map((addr) => (
              <div key={addr.label} className="rounded border border-bleu/10 p-8">
                <h3 className="mb-4 font-serif text-xl font-semibold text-bleu">
                  {addr.label}
                </h3>
                <p className="mb-1.5 text-sm text-gris">{addr.street}</p>
                <p className="mb-1.5 text-sm text-gris">{addr.phone}</p>
                <p className="text-sm text-gris">{addr.hours}</p>
                <a
                  href={addr.mapUrl}
                  className="mt-4 inline-block border-b border-sauge text-sm text-sauge"
                >
                  Voir sur Google Maps
                </a>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
