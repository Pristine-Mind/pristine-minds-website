import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import PartnershipDialog from '@/components/dialogs/partnership/partnership';
import PartnerImage from '@/assets/partnership.png';

export default function Partnership() {
  return (
    <section className="flex flex-col lg:flex-row lg:gap-6">
      <img src={PartnerImage} alt="Two people shaking hands" className="h-64 w-full object-cover lg:h-auto lg:w-1/2" />

      <div className="flex flex-1 flex-col justify-center gap-6 px-6 py-10 text-left text-white sm:px-10 lg:px-16 lg:py-20">
        <span className="text-xs font-medium uppercase tracking-widest opacity-80 sm:text-sm">Notable Partnership</span>

        <div className="space-y-4 max-w-2xl">
          <h2 className="text-2xl font-extrabold leading-snug xs:text-3xl sm:text-4xl lg:text-5xl">
            Our Partnership with NSSNETSYSSOF.
          </h2>
          <p className="text-sm leading-6 opacity-80 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            We are offering DevOps and AWS projects to educational institutes and professionals, with AI and ML
            expansion plans.
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Become our partner</Button>
          </DialogTrigger>
          <DialogContent
            className="lg:max-w-screen-sm"
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <PartnershipDialog />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
