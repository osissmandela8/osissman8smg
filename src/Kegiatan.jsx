function Kegiatan() {
  return (
    <section className="relative grid h-screen bg-gradient-to-b from-[#0A0A0A] to-[#171717]">
      <div className="py-20 px-[160px]">
        <h2 className="pb-5 font-bold text-center text-white text-7xl">
          Kegiatan Kami
        </h2>
        <div
          id="card"
          className="h-[85%] px-[160px] relative grid grid-cols-4 gap-5 text-center text-white text-4xl font-bold font-['Inter]"
        >
          <a
            id="ramadhan"
            className="item row-span-2 bg-[url('assets/kegiatan/ramadhan.png')]"
          >
            Ramadhan
          </a>
          <a
            id="dimasdiajeng"
            className="item col-span-2 bg-[url('assets/kegiatan/dd.png')]"
          >
            Dimas Diajeng
          </a>
          <a
            id="classmeet"
            className="item bg-[url('assets/kegiatan/Classmeet.png')]"
          >
            Classmeet
          </a>
          <a id="mpls" className="item bg-[url('assets/kegiatan/MPLS.png')]">
            MPLS
          </a>
          <a
            id="hutri"
            className="item col-span-2 row-span-2 bg-[url('assets\kegiatan\hutri.png')]"
          >
            HUT RI
          </a>
          <a
            id="hutsmandela"
            className="item col-span-2 row-span-2 bg-[url('assets/kegiatan/huts.png')]"
          >
            HUT Smandela
          </a>
          <a
            id="bulanbahasa"
            className="item bg-[url('assets/kegiatan/bb.png')]"
          >
            Bulan Bahasa
          </a>
          <a id="ldk" className="item bg-[url('assets/kegiatan/LDK.png')]">
            LDK
          </a>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;

{
  /* <h2 className="font-bold text-white text-7xl">Kegiatan Kami</h2> */
}
