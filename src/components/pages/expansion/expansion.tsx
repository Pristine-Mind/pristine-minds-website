const Expansion = () => {
  return (
    <div>
      <div className="text-start max-w-[55%]">
        <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">
          Making It Globalized
        </div>
        <div className="text-5xl font-bold text-left mb-5">Strategic Expansion</div>
        <div className="text-[1.375rem]">
          Pristine Minds understands global software demand and the need for talent. Expanding to Nepal as Pristine
          Minds Nepal allows us to deliver quality solutions efficiently.
        </div>
      </div>

      <div className="grid grid-cols-2 mt-7">
        <div className="text-start max-w-[539px]">
          <div className="flex gap-[22px] items-center mb-5 p-6">
            <img src="src/assets/icons/expansion.svg" alt="expansion icon" className="w-12 h-12" />
            <div className="flex flex-col">
              <p className="font-bold text-[18px] mb-2">Enhanced Capabilities</p>
              <p className="text-base text-slate-800">
                We have a pool of talented individuals in our team which we have garnered over our years of experience
                in this field. This strengthens our service offerings.
              </p>
            </div>
          </div>
          <div className="flex gap-[22px] items-center mb-5 p-6">
            <img src="src/assets/icons/efficiency.svg" alt="efficiency icon" className="w-12 h-12" />
            <div className="flex flex-col">
              <p className="font-bold text-[18px] mb-2">Cost Efficiency</p>
              <p className="text-base text-slate-800">
                By implementing streamlined processes and innovative approaches, we maximize productivity and reduce
                unnecessary expenses. Our commitment to delivering high-quality solutions ensures that clients receive
                exceptional value at competitive prices.
              </p>
            </div>
          </div>
          <div className="flex gap-[22px] items-center p-6">
            <img src="src/assets/icons/cdevelopment.svg" alt="continuous development icon" className="w-12 h-12" />
            <div className="flex flex-col">
              <p className="font-bold text-[18px] mb-2">Continuous Development</p>
              <p className="text-base text-slate-800">
                With teams in Nepal, Thailand, and the USA, we ensure continuous development cycles and superior quality
                through global collaboration and diverse expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src="src/assets/expansion.png" alt="expansion" className="w-[487px] h-[505px] object-fill rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Expansion;
