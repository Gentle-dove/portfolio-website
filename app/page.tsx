// app/page.tsx
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import About from './../components/About';
import Skills from './../components/Skills';
import Projects from './../components/Projects';
import ContactForm from './../components/ContactForm';
import Footer from './../components/Footer';
import BackToTop from './../components/BackToTop';

export default function HomePage() {
  return (
    <>
      <header id="main-header" className="w-full">
        <div id="header-wrapper">
          <Navbar />
        </div>
      </header>

      <main id="content" className="w-full">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><ContactForm /></section>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
