import About from "./components/About";
import Awards from "./components/Awards";
import BigImage from "./components/BigImage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Awards />
      <Gallery />
      <Menu />
      <BigImage />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
