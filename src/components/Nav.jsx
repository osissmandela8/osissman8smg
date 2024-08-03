import logoosis from "../assets/logoosis.png";
import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Nav() {
  return (
    <nav
      className="fixed top-0 h-[40px] w-[100vw] bg-black grid place-items-center"
      data-aos="fade-down"
    >
      <div className="w-screen px-[16px] md:w-[768px] place-items-center content-center grid grid-cols-1 md:grid-cols-2">
        <Link
          to="/"
          className="flex flex-row md:place-self-start"
          onClick={scrollToTop}
        >
          <img className="h-[30px]" src={logoosis} alt="Logo OSIS"></img>
          <div className="self-center pl-4 text-xl font-bold">
            OSIS SMAN 8 Semarang
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
