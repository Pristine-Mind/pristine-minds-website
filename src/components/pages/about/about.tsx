const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col items-start">
        <div className="uppercase mb-2 text-sm tracking-wide font-medium text-brand-blue opacity-80">About Us</div>
        <div className="text-5xl font-bold text-left">Empowering all large and small businesses.</div>
        <div className="bg-[url('src/assets/about-hero.png')] h-[500px] w-[500px] bg-contain bg-no-repeat mt-8"></div>
      </div>
      <div className="flex flex-col text-left">
        <blockquote className="mb-12 border-s-2 pl-[1.75rem] border-primary text-[1.375rem] leading-10">
          Pristine Minds Nepal Pvt. Ltd. (PMN) offers dynamic IT solutions, leveraging global expertise and local
          insights as an extension of Pristine Minds USA.
        </blockquote>
        <div className="text-left mb-8">
          <h3 className="font-bold mb-4 text-2xl">Our Mission</h3>
          <p className="text-[1.375rem] leading-10">
            Our mission is to discover talent, provide training, and deliver custom software for global success.
          </p>
        </div>

        <div className="text-left">
          <h3 className="font-bold mb-4 text-2xl">Our Vision</h3>
          <p className="text-[1.375rem] leading-10">
            To be a leading force in empowering businesses and individuals with cutting-edge technology solutions that
            foster growth, innovation, and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
