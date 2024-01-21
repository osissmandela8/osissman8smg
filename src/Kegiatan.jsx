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
            Ramadhan
          </a>
          <a className="item col-span-2 bg-[url('assets/kegiatan/dd.png')]">
            Dimas Diajeng
          </a>
          <a className="item bg-[url('assets/kegiatan/Classmeet.png')]">
            Classmeet
          </a>
          <a className="item bg-[url('assets/kegiatan/MPLS.png')]">MPLS</a>
          <a className="item col-span-2 row-span-2 bg-[url('assets\kegiatan\hutri.png')]">
            HUT RI
          </a>
          <a className="item col-span-2 row-span-2 bg-[url('assets/kegiatan/huts.png')]">
            HUT Smandela
          </a>
          <a className="item bg-[url('assets/kegiatan/bb.png')]">
            Bulan Bahasa
          </a>
          <a className="item bg-[url('assets/kegiatan/LDK.png')]">LDK</a>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
