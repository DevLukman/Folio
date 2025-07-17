import HeroSection from "@/components/HeroSection";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="app-container mt-[50px] pb-4">
        <SelectedWorks />
      </section>
    </>
  );
}
