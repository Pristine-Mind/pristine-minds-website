import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CollaborationDialog from '@/components/dialogs/collaboration/collaboration';
import Bullet from '/src/assets/bullet.svg';
import ApproachImage from '/src/assets/approach.png';

const Approach = () => {
  return (
    <div className="grid grid-cols-2 gap-[69px]">
      <div className="flex flex-col justify-between items-start">
        <div className="text-start">
          <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">
            Our Approach
          </div>
          <div className="text-5xl font-bold text-left mb-5">Client Satisfaction: Our Priority</div>
          <div className="text-[1.375rem]">
            We adopt a client-centric approach, tailoring our services to meet the specific needs and goals of each
            client.
          </div>
          <ul className="my-[22px]">
            <li className="flex gap-2 mb-3">
              <img src={Bullet} alt="bullet icon" />
              <span className="text-[1.125rem]">Transparent Communication</span>
            </li>
            <li className="flex gap-2 mb-3">
              <img src={Bullet} alt="bullet icon" />
              <span className="text-[1.125rem]">Collaborative Spirit</span>
            </li>
            <li className="flex gap-2 mb-3">
              <img src={Bullet} alt="bullet icon" />
              <span className="text-[1.125rem]">Client Satisfaction</span>
            </li>
          </ul>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="default">Let's work together</Button>
          </DialogTrigger>
          <DialogContent
            className={'lg:max-w-screen-sm'}
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <CollaborationDialog />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <img src={ApproachImage} alt="our approach" height="480" width="510" />
      </div>
    </div>
  );
};

export default Approach;
