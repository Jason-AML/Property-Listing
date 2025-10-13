import imgHero from "../../assets/hero/house_hero.webp";

export const Hero = () => {
  return (
    <section
      className="h-screen w-full bg-amber-300 text-black bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${imgHero})`,
      }}
    >
      {" "}
      <div className="flex  xl:justify-center items-center h-screen w-[50%]">
        <div className="flex flex-col gap-5">
          <h3 className="text-white text-5xl font-bold">
            PEACE, NATURE, DREAM
          </h3>
          <p className="text-gray-400 font-bold">
            Find and book a great experience
          </p>
        </div>
      </div>
    </section>
  );
};
