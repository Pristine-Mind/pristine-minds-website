import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.tsx';

const Values = () => {
  return (
    <div className="grid grid-cols-2 gap-[69px]">
      <div className="text-start">
        <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">
          What Sets Us Apart
        </div>
        <div className="text-5xl font-bold text-left mb-5">Our Values</div>

        <Accordion type="single" collapsible>
          <AccordionItem value="values">
            <AccordionTrigger>Values</AccordionTrigger>
            <AccordionContent>
              We stay at the forefront of technology, continuously exploring new solutions for complex problems.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="excellence">
            <AccordionTrigger>Excellence</AccordionTrigger>
            <AccordionContent>
              We are committed to delivering superior quality in every aspect of our work. Our dedication to excellence
              drives us to continuously improve, innovate, and exceed expectations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="collaboration">
            <AccordionTrigger>Collaboration</AccordionTrigger>
            <AccordionContent>
              Collaboration is at the core of our success. By working together and leveraging diverse perspectives, we
              create innovative solutions that exceed expectations
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="integrity">
            <AccordionTrigger>Integrity</AccordionTrigger>
            <AccordionContent>
              Integrity is the foundation of our business. We uphold the highest ethical standards, ensuring
              transparency and honesty in all our interactions and decisions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-[104px]">
        <blockquote className="mb-12 border-s-2 pl-[1.75rem] text-[22px] border-primary text-start text-">
          At Pristine Minds Nepal, We focus on our core values to ensure that we deliver reliable IT services tailored
          to our client’s needs.
        </blockquote>
        <img src="src/assets/values.jpg" alt="values" className="w-[549px] h-[356px] object-fill rounded-2xl" />
      </div>
    </div>
  );
};

export default Values;
