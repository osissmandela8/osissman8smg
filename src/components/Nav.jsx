import logoosis from "../assets/logoosis.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="fixed top-0 h-[6.25vh] w-[100vw] bg-black  place-items-center content-center grid grid-cols-1 md:grid-cols-2 md:px-[32px] lg:px-[160px]"
      data-aos="fade-down"
    >
      <Link to="/" className="flex flex-row md:place-self-start">
        <img className="h-[4vh]" src={logoosis} alt="Logo OSIS"></img>
        <div className="self-center pl-4 text-2xl font-bold">
          OSIS SMAN 8 Semarang
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
