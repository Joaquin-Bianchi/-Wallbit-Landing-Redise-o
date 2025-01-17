import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FromLatam from "@/components/FromLatam";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RemuneredAccount from "@/components/RemuneredAccount";
import PaymentPlatforms from "@/components/PaymentPlatforms";
import CTA from "@/components/CTA";
import Security from "@/components/Security";
import ServiceComparison from "@/components/ServiceComparison";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#0d99ff1a,transparent)]"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <RemuneredAccount />
        <PaymentPlatforms />
        <ServiceComparison />
        <FromLatam />
        {/* <Statistics /> */}
        <CTA />
        {/* <TestimonialCarousel /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
