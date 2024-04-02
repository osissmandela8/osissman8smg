function Kegiatan() {
  return (
    <section
      id="kegiatan"
      className="grid h-[90vh] md:h-screen place-items-center bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div data-aos="fade-up">
        <h2 className="pb-5 text-3xl font-bold text-center md:text-6xl lg:text-7xl">
          Kegiatan Kami
        </h2>
        <div className="h-[65vh] md:h-[75vh] w-[326px] md:w-[702px] lg:w-[1120px] grid grid-cols-4 gap-3 md:gap-5 lg:gap-6 text-center text-xs md:text-2xl lg:text-4xl font-bold">
          <a
            href="/ramadhan"
            className="item row-span-2 bg-[url('assets/kegiatan/1ramadhan.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150"
          >
            <span>Ramadhan</span>
          </a>
          <a className="item col-span-2 bg-[url('assets/kegiatan/2dd.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>Dimas Diajeng</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/3classmeet.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>Classmeet</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/4mpls.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>MPLS</span>
          </a>
          <a className="item col-span-2 row-span-2 bg-[url('assets/kegiatan/5hutri.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>HUT RI</span>
          </a>
          <a className="item col-span-2 row-span-2 bg-[url('assets/kegiatan/6huts.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>HUT Smandela</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/7bb.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>Bulan Bahasa</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/8ldk.png')] rounded-[25px] bg-center bg-cover grid place-items-center hover:scale-105 duration-300 ease-in-out hover:saturate-150">
            <span>LDK</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
