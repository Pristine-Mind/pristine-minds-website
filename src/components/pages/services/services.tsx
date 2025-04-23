import ServiceCard from '@/components/ui/service-card';

const services = [
  {
    image: 'development',
    alt: 'development icon',
    title: 'Software Development',
    description: 'We deliver custom software solutions for efficient business needs.',
  },
  {
    image: 'training',
    alt: 'training icon',
    title: 'IT Training & Bootcamps',
    description: 'Intensive training programs to equip individuals with the latest tech skills.',
  },
  {
    image: 'cloud',
    alt: 'cloud icon',
    title: 'Cloud Solutions',
    description: 'Cloud solutions for efficient business operations.',
  },
  {
    image: 'blockchain',
    alt: 'blockchain icon',
    title: 'Blockchain & AI Solutions',
    description: 'Innovative blockchain and AI solutions for complex business challenges.',
  },
  {
    image: 'elearning',
    alt: 'elearning icon',
    title: 'E-Learning Platforms',
    description: 'We develop e-learning platforms for online education and training.',
  },
  {
    image: 'consulting',
    alt: 'consulting icon',
    title: 'Project Management & Consultancy',
    description: 'We provide expert IT project management and consultancy services.',
  },
];

export default function Services() {
  return (
    <section>
      <div className="mb-10 max-w-4xl space-y-4 text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue/80 sm:text-sm">Services</span>
        <h2 className="text-2xl font-extrabold leading-snug xs:text-3xl sm:text-4xl">
          Unlocking Potential: Our Service Offerings.
        </h2>
        <blockquote className="border-l-4 border-primary pl-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 md:text-lg md:leading-8">
          At Pristine Minds, we provide a comprehensive suite of offerings tailored to meet your specific needs.
        </blockquote>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </section>
  );
}
