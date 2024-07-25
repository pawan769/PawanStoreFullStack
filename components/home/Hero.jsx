const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[50vh] ">
      <div className=" flex justify-center items-center h-[80%] w-[50%] ">
        <section className="  w-1/2 flex flex-col items-left justify-center mr-5 ">
          <h4 className="text-zinc-600 uppercase text-xs">Welcome To</h4>
          <h1 className="text-semibold text-4xl mb-4">Pawan Store</h1>
          <p className=" text-zinc-600 text-sm mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab illo
            sint in consequuntur ipsa ea doloremque vero, dolorum molestias
            tempora omnis tenetur modi.
          </p>
          <button className="text-center font-semibold text-white w-24 h-9 bg-emerald-500">
            Shop Now
          </button>
        </section>
        <section className=" w-1/2">
          <img
            src="../img/hero_img.jpg"
            alt="hero img"
            className="h-full w-full"
          />
        </section>
      </div>
    </div>
  );
};

export default Hero;
