"use client";

import RevealSection from "./RevealSection";
import { doctor } from "@/data/doctor";

export default function Contact() {
  const { contact, addresses } = doctor;
  const address = addresses[0];

  return (
    <section id="contact" className="py-[88px]">
      <div className="mx-auto max-w-wrap px-6">
        <RevealSection>
          <div className="mb-4 h-0.5 w-10 bg-sauge" />

          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold text-bleu">
            Contact
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Informations de contact */}
            <div className="flex flex-col justify-center rounded-[4px] border border-bleu/10 bg-ivoire p-7 md:p-9">
              <h3 className="font-serif text-xl font-semibold text-bleu">
                Coordonnées
              </h3>

              <div className="mt-8 flex flex-col gap-7">
                {/* Adresse */}
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-sauge">
                    Adresse
                  </p>

                  <p className="mt-2 max-w-[42ch] leading-7 text-gris">
                    {address.street}
                  </p>
                </div>

                {/* Téléphone */}
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-sauge">
                    Téléphone
                  </p>

                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="mt-2 block text-base text-gris transition-colors hover:text-bleu"
                  >
                    {contact.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-sauge">
                    Email
                  </p>

                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 block break-all text-base text-gris transition-colors hover:text-bleu"
                  >
                    {contact.email}
                  </a>
                </div>

                {/* Horaires */}
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-sauge">
                    Horaires
                  </p>

                  <p className="mt-2 leading-7 text-gris">
                    {address.hours}
                  </p>
                </div>
              </div>

              {/* Google Maps */}
              <a
                href={address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-fit rounded-[3px] bg-bleu px-5 py-3 text-sm text-ivoire transition-colors hover:bg-sauge hover:text-bleu"
              >
                Ouvrir dans Google Maps
              </a>
            </div>

            {/* Carte Google Maps */}
            <div className="min-h-[420px] overflow-hidden rounded-[4px] border border-bleu/10">
              <iframe
                title="Localisation du cabinet du Dr Hela Farjallah Gharbi"
                src="https://www.google.com/maps?q=36.8624322,10.2542658&z=17&output=embed"
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}