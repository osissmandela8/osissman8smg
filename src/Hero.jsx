function Hero() {
  return (
    <section className="relative h-screen bg-[url('assets/hero.jpg')] bg-center bg-cover">
      <div className="w-[1320px] h-[194px] left-0 bottom-[50px] absolute bg-neutral-900 rounded-tr-[50px] rounded-br-[50px] grid place-items-center">
        <h1 className="w-[1129px] left-[160px] absolute">
          <span className="text-purple-500 text-8xl font-bold mb-[-100px]">
            OSIS SMAN 8 Semarang
            <br className="block mb-[100px]" />
            <span className="text-white text-5xl font-semibold">2023/2024</span>
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
