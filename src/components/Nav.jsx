import logoosis from "../assets/logoosis.png";

function Nav() {
  return (
    <nav
      className="fixed top-0 h-[6.25vh] w-[100vw] bg-neutral-900 bg-opacity-75 place-items-center content-center grid grid-cols-1 md:grid-cols-2 md:px-[32px] lg:px-[160px]"
      data-aos="fade-down"
    >
      <a
        href="/"
        className="flex flex-row invisible md:visible md:place-self-start"
      >
        <img className="h-[4vh]" src={logoosis} alt="Logo OSIS"></img>
        <div className="self-center pl-4 text-2xl font-bold">
          OSIS SMAN 8 Semarang
        </div>
      </a>
      <ul className="grid grid-cols-3 mb-[4vh] md:mb-[0.5vh] place-items-center md:text-right md:place-self-end">
        <li className="px-8 text-lg font-medium duration-300 ease-in-out md:text-xl lg:text-2xl hover:scale-105 text-neutral-200 hover:text-white;">
          <a href="#header">Home</a>
        </li>
        <li className="px-8 text-lg font-medium duration-300 ease-in-out md:text-xl lg:text-2xl hover:scale-105 text-neutral-200 hover:text-white;">
          <a href="#sambutan">Sambutan</a>
        </li>
        <li className="px-8 text-lg font-medium duration-300 ease-in-out md:text-xl lg:text-2xl hover:scale-105 text-neutral-200 hover:text-white;">
          <a href="#kegiatan">Kegiatan</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
