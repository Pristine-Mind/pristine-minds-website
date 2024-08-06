import { Button } from '@/components/ui/button.tsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.tsx';
import PartnershipDialog from '@/components/dialogs/partnership/partnership.tsx';

const Partnership = () => {
  return (
    <div className="flex h-full gap-2">
      <img
        src="src/assets/partnership.png"
        alt="shaking hands"
        className="h-full w-[50%] object-cover object-left-top"
      />
      <div className="text-white px-[67px] py-[100px] text-start">
        <div className="uppercase mb-2 text-sm tracking-widest font-medium text-white opacity-80">
          Notable Partnership
        </div>
        <div className="max-w-[50%] mb-[30px]">
          <div className="text-5xl font-bold text-left leading-[52px] mb-[10px]">
            Our Partnership With NSSNETSYSSOF.
          </div>
          <div className="text-[22px] leading-[40px] opacity-80">
            We are offering DevOps and AWS projects to educational institutes and professionals, with AI and ML
            expansion plans.
          </div>
        </div>

        <Dialog>
          <DialogTrigger>
            <Button size="default">Become our Partner</Button>
          </DialogTrigger>
          <DialogContent>
            <PartnershipDialog></PartnershipDialog>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Partnership;
