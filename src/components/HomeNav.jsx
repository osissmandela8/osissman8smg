import logoosis from "../assets/logoosis.png";
import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
function HomeNav() {
  return (
    <nav
      className="fixed top-0 h-[40px] w-[100vw] bg-neutral-900 bg-opacity-75 grid place-items-center"
      data-aos="fade-down"
    >
      <div className="w-screen px-[16px] md:w-[768px] place-items-center content-center grid grid-cols-1 md:grid-cols-2">
        <Link
          to="/"
          className="flex flex-row invisible md:visible md:place-self-start"
          onClick={scrollToTop}
        >
          <img className="h-[30px]" src={logoosis} alt="Logo OSIS"></img>
          <div className="self-center pl-4 text-xl font-bold">
            OSIS SMAN 8 Semarang
          </div>
        </Link>
        <ul className="absolute md:relative grid grid-cols-3 md:mb-[3px] place-items-center md:text-right md:place-self-end">
          <li className="px-8 text-lg font-medium duration-300 ease-in-out md:text-xl hover:scale-105 text-neutral-200 hover:text-white">
            <a href="#sambutan">Sambutan</a>
          </li>
          <li className="px-8 text-lg font-medium duration-300 ease-in-out md:text-xl hover:scale-105 text-neutral-200 hover:text-white">
            <a href="#profil">Profil</a>
          </li>
          <li className="px-8 text-lg font-medium duration-300 ease-in-out md:text-xl hover:scale-105 text-neutral-200 hover:text-white">
            <a href="#kegiatan">Kegiatan</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNav;
