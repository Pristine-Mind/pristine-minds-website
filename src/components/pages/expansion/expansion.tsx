import ExpansionIcon from '@/assets/icons/expansion.svg';
import EfficiencyIcon from '@/assets/icons/efficiency.svg';
import DevIcon from '@/assets/icons/cdevelopment.svg';
import ExpansionImg from '@/assets/expansion.png';

const bullets = [
  {
    icon: ExpansionIcon,
    title: 'Enhanced Capabilities',
    body: 'We have a pool of talented individuals in our team which we have garnered over our years of experience in this field. This strengthens our service offerings.',
  },
  {
    icon: EfficiencyIcon,
    title: 'Cost Efficiency',
    body: 'By implementing streamlined processes and innovative approaches, we maximize productivity and reduce unnecessary expenses. Our commitment to delivering high‑quality solutions ensures that clients receive exceptional value at competitive prices.',
  },
  {
    icon: DevIcon,
    title: 'Continuous Development',
    body: 'With teams in Nepal, Thailand, and the USA, we ensure continuous development cycles and superior quality through global collaboration and diverse expertise.',
  },
];

export default function Expansion() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-4 text-left md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue/80 sm:text-sm">
          Making It Globalized
        </span>
        <h2 className="text-2xl font-extrabold leading-snug xs:text-3xl sm:text-4xl lg:text-5xl">
          Strategic Expansion
        </h2>
        <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
          Pristine Minds understands global software demand and the need for talent. Expanding to Nepal as Pristine
          Minds Nepal allows us to deliver quality solutions efficiently.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          {bullets.map(({ icon, title, body }) => (
            <div key={title} className="flex gap-5 rounded-xl p-4 hover:bg-gray-50">
              <img src={icon} alt="" className="h-10 w-10 shrink-0 object-contain" />
              <div className="space-y-1">
                <h3 className="text-lg font-bold leading-snug md:text-xl">{title}</h3>
                <p className="text-sm leading-6 text-gray-700 md:text-base md:leading-7">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-first md:order-none flex justify-center md:justify-end">
          <img
            src={ExpansionImg}
            alt="Global expansion illustration"
            className="h-64 w-full max-w-sm rounded-2xl object-cover xs:h-72 sm:h-80 md:h-[26rem] lg:h-[28rem]"
          />
        </div>
      </div>
    </section>
  );
}
