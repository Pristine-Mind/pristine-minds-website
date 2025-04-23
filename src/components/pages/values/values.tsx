import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ValueImage from '@/assets/values.jpg';

const items = [
  {
    value: 'values',
    title: 'Values',
    body: 'We stay at the forefront of technology, continuously exploring new solutions for complex problems.',
  },
  {
    value: 'excellence',
    title: 'Excellence',
    body: 'We are committed to delivering superior quality in every aspect of our work. Our dedication to excellence drives us to continuously improve, innovate, and exceed expectations.',
  },
  {
    value: 'collaboration',
    title: 'Collaboration',
    body: 'Collaboration is at the core of our success. By working together and leveraging diverse perspectives, we create innovative solutions that exceed expectations.',
  },
  {
    value: 'integrity',
    title: 'Integrity',
    body: 'Integrity is the foundation of our business. We uphold the highest ethical standards, ensuring transparency and honesty in all our interactions and decisions.',
  },
];

export default function Values() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className="space-y-6 text-left">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue/80 sm:text-sm">
          What Sets Us Apart
        </span>
        <h2 className="text-2xl font-extrabold leading-snug xs:text-3xl sm:text-4xl lg:text-5xl">Our Values</h2>

        <Accordion type="single" collapsible className="pt-2">
          {items.map(({ value, title, body }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>{body}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="flex flex-col gap-6 md:pt-14">
        <blockquote className="border-l-4 border-primary pl-5 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
          At Pristine Minds Nepal, we focus on our core values to ensure that we deliver reliable IT services tailored
          to our clients’ needs.
        </blockquote>

        <img
          src={ValueImage}
          alt="Team embodying company values"
          className="mx-auto h-56 w-full rounded-2xl object-cover xs:h-64 sm:h-72 md:h-[22rem] lg:h-[24rem]"
        />
      </div>
    </section>
  );
}
