import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CollaborationDialog from '@/components/dialogs/collaboration/collaboration';
import Bullet from '@/assets/bullet.svg';
import ApproachImage from '@/assets/approach.png';

const bullets = ['Transparent Communication', 'Collaborative Spirit', 'Client Satisfaction'];

export default function Approach() {
  return (
    <section className="grid gap-10 md:grid-cols-2 md:gap-16">
      {/* Copy column */}
      <div className="flex flex-col justify-between gap-8 md:gap-12">
        <div className="space-y-4 text-left">
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue/80 sm:text-sm">
            Our Approach
          </span>
          <h2 className="text-2xl font-extrabold leading-snug xs:text-3xl sm:text-4xl lg:text-5xl">
            Client Satisfaction: Our Priority
          </h2>
          <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
            We adopt a client‑centric approach, tailoring our services to meet the specific needs and goals of each
            client.
          </p>

          <ul className="space-y-3 pt-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <img src={Bullet} alt="bullet icon" className="mt-1 h-4 w-4 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Let's work together</Button>
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

      {/* Illustration column */}
      <div className="order-first md:order-none">
        <img
          src={ApproachImage}
          alt="Our approach illustration"
          className="mx-auto h-64 w-auto object-contain sm:h-80 md:h-[26rem]"
        />
      </div>
    </section>
  );
}
