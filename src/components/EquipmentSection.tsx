
import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function EquipmentSection() {
  const { equipment } = doctor;

  return (
    <section
      id="equipements"
      className="border-y border-bleu/10 bg-white py-[88px]"
    >
      <div className="mx-auto max-w-wrap px-6">
        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />

          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Équipements
          </h2>

          <p className="mt-1.5 text-sm italic text-gris">
            {equipment.note}
          </p>

          <div className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-3">
            {equipment.items.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[5/4] overflow-hidden rounded"
              >
                <img
                  src={`/images/equipment-${i + 1}.jpg`}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
                  <p className="text-xs text-ivoire">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

