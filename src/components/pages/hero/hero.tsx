import { Button } from '@/components/ui/button.tsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.tsx';
import CollaborationDialog from '@/components/dialogs/collaboration/collaboration.tsx';

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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="default">Work with us</Button>
          </DialogTrigger>
          <DialogContent
            className={'lg:max-w-screen-sm '}
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <CollaborationDialog></CollaborationDialog>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Hero;
