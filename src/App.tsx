import './App.css';
import Hero from '@/components/pages/hero/hero';
import Header from '@/components/layout/header';
import About from '@/components/pages/about/about';
import Services from '@/components/pages/services/services';
import Approach from '@/components/pages/approach/approach';
import Values from '@/components/pages/values/values';
import Expansion from '@/components/pages/expansion/expansion';
import Focus from '@/components/pages/focus/focus';
import Partnership from '@/components/pages/partnership/partnership';
import Contact from '@/components/pages/contact/contact';
import Footer from '@/components/layout/footer';
import { Projects } from './components/pages/projects/projects';
import { Toaster } from '@/components/ui/toaster';
import hero from '/src/assets/hero.png';

function Section({ id, bg = '', children }: React.PropsWithChildren<{ id: string; bg?: string }>) {
  return (
    <section id={id} className={`${bg} w-full`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-gray-900 antialiased">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <Header />
        </div>
      </header>

      <section id="hero" className="relative isolate">
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
          <img src={hero} alt="Background" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80" />
        </div>

        <div className="container mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>

      <Section id="about" bg="bg-white">
        <About />
      </Section>

      <Section id="services" bg="bg-blue-50">
        <Services />
      </Section>

      <Section id="approach" bg="bg-white">
        <Approach />
      </Section>

      <Section id="values" bg="bg-blue-50">
        <Values />
      </Section>

      <Section id="expansion" bg="bg-white">
        <Expansion />
      </Section>

      <Section id="focus" bg="bg-blue-50">
        <Focus />
      </Section>

      {/* Partnership banner */}
      <section id="partnership" className="bg-brand-blue">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Partnership />
        </div>
      </section>

      <Section id="project" bg="bg-blue-50">
        <Projects />
      </Section>

      {/* Contact */}
      <Section id="contact" bg="bg-white">
        <Contact />
      </Section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Footer />
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
