import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DoctorSection from "@/components/DoctorSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CabinetSection from "@/components/CabinetSection";
import EquipmentSection from "@/components/EquipmentSection";
import Gallery from "@/components/Gallery";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DoctorSection />
        <ExpertiseSection />
        <CabinetSection />
        <EquipmentSection />
        <Gallery />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
