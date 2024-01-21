function Kegiatan() {
  return (
    <section
      id="kegiatan"
      className="grid h-screen place-items-center bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div data-aos="fade-up ">
        <h2 className="pb-5 font-bold text-center text-7xl">Kegiatan Kami</h2>
        <div className="h-[75vh] w-[1120px] grid grid-cols-4 gap-5 text-center text-4xl font-bold font-['Inter]">
          <a className="item row-span-2 bg-[url('assets/kegiatan/ramadhan.png')]">
            <span>Ramadhan</span>
          </a>
          <a className="item col-span-2 bg-[url('assets/kegiatan/dd.png')]">
            <span>Dimas Diajeng</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/Classmeet.png')]">
            <span>Classmeet</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/MPLS.png')]">
            <span>MPLS</span>
          </a>
          <a className="item col-span-2 row-span-2 bg-[url('assets\kegiatan\hutri.png')]">
            <span>HUT RI</span>
          </a>
          <a className="item col-span-2 row-span-2 bg-[url('assets/kegiatan/huts.png')]">
            <span>HUT Smandela</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/bb.png')]">
            <span>Bulan Bahasa</span>
          </a>
          <a className="item bg-[url('assets/kegiatan/LDK.png')]">
            <span>LDK</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
