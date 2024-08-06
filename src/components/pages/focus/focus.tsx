const Focus = () => {
  return (
    <div>
      <div className="flex flex-col text-left">
        <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">
          What We Aspire For
        </div>
        <div className="grid grid-cols-2 gap-[6.5rem]">
          <div className="text-5xl font-bold text-left">Our Development Focus</div>
          <blockquote className="mb-12 border-s-2 pl-[1.75rem] border-primary text-xl justify-end">
            We're deeply involved in socio-economic projects driving sustainable growth. Our scope goes far,
            encompassing diverse development projects:
          </blockquote>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-8">
        <div className="flex drop-shadow-sm bg-white rounded-s-lg h-[10.75rem]">
          <img
            src="src/assets/focus/technological-advancements.png"
            alt="technological advancements"
            className="h-full w-auto object-contain shadow-sm"
          />
          <div className="py-4 px-6 text-start">
            <h3 className="text-[22px] leading-8 font-bold mb-[10px] tracking-tight">Technological Advancements</h3>
            <p className="text-lg">Implementing cutting-edge technology to solve real-world problems.</p>
          </div>
        </div>
        <div className="flex drop-shadow-sm bg-white rounded-s-lg h-[10.75rem]">
          <img
            src="src/assets/focus/educational-initiatives.png"
            alt="educational initiatives"
            className="h-full w-auto object-contain shadow-sm"
          />
          <div className="py-4 px-6 text-start">
            <h3 className="text-[22px] leading-8 font-bold mb-[10px] tracking-tight">Educational Initiatives</h3>
            <p className="text-lg">
              Providing training programs and boot camps to equip individuals with the latest tech skills.
            </p>
          </div>
        </div>
        <div className="flex drop-shadow-sm bg-white rounded-s-lg h-[10.75rem]">
          <img
            src="src/assets/focus/environmental-sustainability.png"
            alt="environmental sustainability"
            className="h-full w-auto object-contain shadow-sm"
          />
          <div className="py-4 px-6 text-start">
            <h3 className="text-[22px] leading-8 font-bold mb-[10px] tracking-tight">Environmental Sustainability</h3>
            <p className="text-lg">Partnering with organizations like Dimitra to enhance agricultural practices.</p>
          </div>
        </div>
        <div className="flex drop-shadow-sm bg-white rounded-s-lg h-[10.75rem]">
          <img
            src="src/assets/focus/community-empowerment.png"
            alt="community empowerment"
            className="h-full w-auto object-contain shadow-sm"
          />
          <div className="py-4 px-6 text-start">
            <h3 className="text-[22px] leading-8 font-bold mb-[10px] tracking-tight">Community Empowerment</h3>
            <p className="text-lg">Empowering communities with tech-driven solutions for growth and livelihoods..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
