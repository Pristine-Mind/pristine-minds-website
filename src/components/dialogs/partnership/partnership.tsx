import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import { Button } from '@/components/ui/button.tsx';

const PartnershipDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Become our partner</DialogTitle>
        <DialogDescription>Please enter the details.</DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2"></div>
      <DialogFooter className="sm:justify-start w-full">
        <DialogClose asChild className="w-full">
          <Button size="default">Submit</Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};

export default PartnershipDialog;
