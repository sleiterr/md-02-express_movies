import React from "react";
import heroBg from "../../assets/img/Hero_img.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] md:w-full h-screen md:h-auto bg-cover bg-no-repeat bg-center md:aspect-[8/5]"
      id="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="py-[8rem] mx-auto md:max-w-7xl"></div>
    </section>
  );
};

export default Hero;
