import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Staff from "@/components/Staff";
import LocationContact from "@/components/LocationContact";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Staff />
        <Registration />
        <LocationContact />
      </main>
      <Footer />
    </>
  );
}
