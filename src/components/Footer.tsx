import { doctor } from "@/data/doctor";

export default function Footer() {
  return (
    <footer className="border-t border-bleu/10 py-14">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-6 px-6">
        <div className="font-serif text-xl font-semibold text-bleu">
          {doctor.fullName.replace("Gharbi", "")}
          <span className="text-sauge">Gharbi</span>
        </div>
        <p className="text-sm text-gris">
          {doctor.specialties} — {doctor.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
