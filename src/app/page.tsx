import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShipmentJourney from "@/components/ShipmentJourney";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShipmentJourney />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
