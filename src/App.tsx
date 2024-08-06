import './App.css';
import Hero from '@/components/pages/hero/hero.tsx';
import Header from '@/components/layout/header.tsx';
import About from '@/components/pages/about/about.tsx';
import Services from '@/components/pages/services/services.tsx';
import Approach from '@/components/pages/approach/approach.tsx';
import Values from '@/components/pages/values/values.tsx';
import Expansion from '@/components/pages/expansion/expansion.tsx';
import Focus from '@/components/pages/focus/focus.tsx';
import Partnership from '@/components/pages/partnership/partnership.tsx';
import Contact from '@/components/pages/contact/contact.tsx';
import Footer from '@/components/layout/footer.tsx';
import { Toaster } from '@/components/ui/toaster.tsx';

function App() {
  return (
    <div className="flex flex-col">
      <div className="h-[97px] mx-auto w-[1140px]">
        <Header></Header>
      </div>

      <div className="relative h-[662px]" id="hero">
        <div className="bg-[url('src/assets/hero.png')] h-[662px] w-screen -z-10 absolute left-0"></div>
        <div className="mx-auto max-w-[1140px]">
          <Hero></Hero>
        </div>
      </div>

      <div className="bg-white" id="about">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <About></About>
        </div>
      </div>

      <div className="h-[1120px] bg-blue-50" id="services">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <Services></Services>
        </div>
      </div>

      <div className="h-[752px] bg-white" id="approach">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <Approach></Approach>
        </div>
      </div>

      <div className="h-[882px] bg-blue-50" id="values">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <Values></Values>
        </div>
      </div>

      <div className="bg-white" id="expansion">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <Expansion></Expansion>
        </div>
      </div>

      <div className="relative h-[792px] bg-blue-50" id="focus">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <Focus></Focus>
        </div>
      </div>

      <div className="relative h-[544px] bg-brand-blue" id="partnership">
        <Partnership></Partnership>
      </div>

      <div className="bg-white" id="contact">
        <div className="w-[1440px] mx-auto p-[8.5rem]">
          <Contact></Contact>
        </div>
      </div>

      <div className="bg-brand-blue">
        <div className="w-[1440px] mx-auto">
          <Footer></Footer>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
