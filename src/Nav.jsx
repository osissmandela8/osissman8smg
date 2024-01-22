function Nav() {
  return (
    <nav className="fixed top-0 h-[6.25vh] w-[100vw] bg-neutral-900 bg-opacity-75 place-items-center content-center grid grid-cols-1 md:grid-cols-2 md:px-[32px] lg:px-[160px]">
      <div className="flex flex-row invisible md:visible md:place-self-start">
        <img className="h-[4vh]" src="src/assets/logo.png"></img>
        <div className="self-center pl-4 text-2xl font-bold">
          OSIS SMAN 8 Semarang
        </div>
      </div>
      <ul className="grid grid-cols-3 mb-[4vh] md:mb-[0.5vh] place-items-center md:text-right md:place-self-end">
        <li className="nav">
          <a href="#header">Home</a>
        </li>
        <li className="nav">
          <a href="#sambutan">Sambutan</a>
        </li>
        <li className="nav">
          <a href="#kegiatan">Kegiatan</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
