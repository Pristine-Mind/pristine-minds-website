import { Button } from '@/components/ui/button.tsx';

const Hero = () => {
  return (
    <div className="flex flex-col items-baseline justify-center text-left h-[662px]">
      <p className="text-7xl font-black leading-[96px] text-white w-8/12">
        Empower, Evolve, Innovate, <span className="text-primary">Succeed</span>.
      </p>
      <p className="text-3xl leading-[46px] mb-[28px] text-white w-8/12">
        Empowering global Innovation: Elite IT staffing, Cutting-edge bootcamps, and Comprehensive web development.
      </p>
      <div className="pl-0.5">
        <Button>Work with us</Button>
      </div>
    </div>
  );
};

export default Hero;
