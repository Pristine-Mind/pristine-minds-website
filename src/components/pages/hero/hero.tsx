import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CollaborationDialog from '@/components/dialogs/collaboration/collaboration';

export default function Hero() {
  return (
    <div className="flex w-full max-w-screen-lg mx-auto flex-col items-center justify-center gap-6 py-10 sm:gap-8 sm:py-16 md:py-20">
      <p className="w-full text-3xl font-black leading-tight text-white text-center xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Empower, <span className="text-primary">Evolve</span>, Innovate,&nbsp;
        <span className="text-primary">Succeed</span>.
      </p>
      <div className="w-full flex justify-center">
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
    </div>
  );
}
