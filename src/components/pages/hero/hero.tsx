import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CollaborationDialog from '@/components/dialogs/collaboration/collaboration';

export default function Hero() {
  return (
    <div className="flex w-full max-w-screen-lg flex-col items-start justify-center gap-6 py-10 sm:gap-8 sm:py-16 md:py-20">
      <p className="text-3xl font-black leading-tight text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Empower, Evolve, Innovate,&nbsp;
        <span className="text-primary">Succeed</span>.
      </p>

      <p className="text-base leading-7 text-white xs:text-lg sm:text-xl sm:leading-8 md:text-2xl md:leading-9 lg:text-3xl lg:leading-[46px]">
        Empowering global innovation: elite IT staffing, cutting-edge bootcamps, and comprehensive web development.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Work with us</Button>
        </DialogTrigger>
        <DialogContent
          className="lg:max-w-screen-sm"
          onEscapeKeyDown={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <CollaborationDialog />
        </DialogContent>
      </Dialog>
    </div>
  );
}
