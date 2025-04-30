import HeroImg from '@/assets/about-hero.png';

export default function About() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col items-start">
        <span className="mb-2 text-sm font-medium uppercase tracking-wide text-brand-blue/80">About&nbsp;Us</span>

        <h2 className="text-left text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
          Empowering all large and small businesses.
        </h2>

        <div className="relative mt-8 w-full overflow-hidden rounded-lg bg-gray-50 md:mt-12">
          <img src={HeroImg} alt="About hero" className="h-64 w-full object-contain sm:h-80 md:h-[28rem]" />
        </div>
      </div>

      <div className="flex flex-col">
        <blockquote className="mb-10 border-l-4 border-primary pl-6 text-lg leading-8 text-gray-700 md:mb-12 md:text-xl md:leading-9">
          Pristine Minds Nepal Pvt. Ltd. (PMN) offers dynamic IT solutions, leveraging global expertise and local
          insights.
        </blockquote>

        <div className="mb-8 space-y-4">
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className="text-lg leading-8 text-gray-700">
            To empower organizations and communities worldwide by delivering innovative technology solutions, expert
            consulting, and hands-on training that foster sustainable growth, digital inclusion, and positive social
            impact.{' '}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p className="text-lg leading-8 text-gray-700">
            To be a leading force in empowering businesses and individuals with cutting-edge technology solutions that
            foster growth, innovation, and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}
