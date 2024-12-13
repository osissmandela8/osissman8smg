import { Link } from "react-router-dom";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

function Kegiatan() {
  return (
    <section
      id="kegiatan"
      className="grid h-[90vh] md:h-screen place-items-center bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div data-aos="fade-up">
        <h2 className="pb-5 text-3xl font-bold text-center md:text-6xl">
          Kegiatan Kami
        </h2>
        <div className="h-[65vh] md:h-[75vh] w-screen md:w-[768px] p-[24px] grid grid-cols-4 gap-3 md:gap-4 text-center text-xs md:text-2xl font-bold">
          <Link
            to="/ramadhan"
            onClick={scrollToTop}
            className=" row-span-2 bg-[url('assets/kegiatan/1ramadhan.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>Ramadhan</span>
          </Link>
          <Link
            to="/dimasdiajeng"
            onClick={scrollToTop}
            className="col-span-2 bg-[url('assets/kegiatan/2dd.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>Dimas Diajeng</span>
          </Link>
          <Link
            to="/classmeet1"
            onClick={scrollToTop}
            className="bg-[url('assets/kegiatan/3classmeet.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>Classmeet</span>
          </Link>
          <Link
            to="/mpls"
            onClick={scrollToTop}
            className="bg-[url('assets/kegiatan/4mpls.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>MPLS</span>
          </Link>
          <Link
            to="/hutri"
            onClick={scrollToTop}
            className="col-span-2 row-span-2 bg-[url('assets/kegiatan/5hutri.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>HUT RI</span>
          </Link>
          <Link
            to="/hutsmandela"
            onClick={scrollToTop}
            className="col-span-2 row-span-2 bg-[url('assets/kegiatan/6huts.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>HUT Smandela</span>
          </Link>
          <Link className="item bg-[url('assets/kegiatan/7bb.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>Bulan Bahasa</span>
          </Link>
          <Link className="item bg-[url('assets/kegiatan/8ldk.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>LDK</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
