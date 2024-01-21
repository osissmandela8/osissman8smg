function Nav() {
  return (
    <nav className="fixed top-0 h-[6.25%] w-[100%] bg-neutral-900 bg-opacity-75 backdrop-blur px-[160px] content-center grid grid-cols-2">
      <div className="flex content-center">
        <img className="h-[4vh]" src="src\assets\logo.png"></img>
        <div className="self-center pl-4 text-2xl font-bold">
          OSIS SMAN 8 Semarang
        </div>
      </div>
      <ul className="right-0 text-right">
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
