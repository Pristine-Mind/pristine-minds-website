import Advancement from '@/assets/focus/technological-advancements.png';
import EducationalInitiative from '@/assets/focus/educational-initiatives.png';
import Sustainability from '@/assets/focus/environmental-sustainability.png';
import Community from '@/assets/focus/community-empowerment.png';

const cards = [
  {
    img: Advancement,
    alt: 'technological advancements',
    title: 'Technological Advancements',
    body: 'Implementing cutting-edge technology to solve real‑world problems.',
  },
  {
    img: EducationalInitiative,
    alt: 'educational initiatives',
    title: 'Educational Initiatives',
    body: 'Providing training programs and boot camps to equip individuals with the latest tech skills.',
  },
  {
    img: Sustainability,
    alt: 'environmental sustainability',
    title: 'Environmental Sustainability',
    body: 'Partnering with organizations like Dimitra to enhance agricultural practices.',
  },
  {
    img: Community,
    alt: 'community empowerment',
    title: 'Community Empowerment',
    body: 'Empowering communities with tech‑driven solutions for growth and livelihoods.',
  },
];

export default function Focus() {
  return (
    <section className="space-y-10">
      <div className="space-y-4 text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue/80 sm:text-sm">
          What We Aspire For
        </span>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-2xl font-extrabold leading-snug xs:text-3xl sm:text-4xl lg:text-5xl">
            Our Development Focus
          </h2>
          <blockquote className="border-l-4 border-primary pl-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            We're deeply involved in socio‑economic projects driving sustainable growth. Our scope goes far,
            encompassing diverse development projects:
          </blockquote>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map(({ img, alt, title, body }) => (
          <div key={title} className="flex rounded-xl bg-white shadow-sm transition hover:shadow-lg">
            <img src={img} alt={alt} className="h-full w-32 shrink-0 rounded-l-xl object-cover sm:w-40" />
            <div className="flex flex-col justify-center gap-2 p-4 text-left sm:p-6">
              <h3 className="text-base font-bold leading-snug sm:text-lg md:text-xl">{title}</h3>
              <p className="text-sm leading-6 text-gray-700 sm:text-base md:text-lg">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
