import ServiceCard from '@/components/ui/service-card.tsx';

const Services = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-left">
        <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">Services</div>
        <div className="grid grid-cols-2 gap-[6.5rem]">
          <div className="text-5xl font-bold text-left">Unlocking Potential: Our Service Offerings.</div>
          <blockquote className="mb-12 border-s-2 pl-[1.75rem] border-primary text-xl">
            At Pristine Minds, we provide a comprehensive suite of offerings tailored to meet your specific needs.
          </blockquote>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 mt-[67px]">
        <ServiceCard
          image="development"
          alt="development icon"
          title="Software Development"
          description="We deliver custom software solutions for efficient business needs."
        ></ServiceCard>
        <ServiceCard
          image="training"
          alt="training icon"
          title="IT Training & Bootcamps"
          description="Intensive training programs to equip individuals with the latest tech skills."
        ></ServiceCard>
        <ServiceCard
          image="cloud"
          alt="cloud icon"
          title="Cloud Solutions"
          description="Cloud solutions for efficient business operations."
        ></ServiceCard>
        <ServiceCard
          image="blockchain"
          alt="blockchain icon"
          title="Blockchain & AI Solutions"
          description="Innovative blockchain and AI solutions for complex business challenges."
        ></ServiceCard>
        <ServiceCard
          image="elearning"
          alt="elearning icon"
          title="E-Learning Platforms"
          description="We develop e-learning platforms for online education and training."
        ></ServiceCard>
        <ServiceCard
          image="consulting"
          alt="consulting icon"
          title="Project Management & Consultancy"
          description="We provide expert IT project management and consultancy services."
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Services;
