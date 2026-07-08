import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/Faq";

import Hero from "@/components/Hero";

import ShipmentJourney from "@/components/ShipmentJourney";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShipmentJourney />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  );
}
