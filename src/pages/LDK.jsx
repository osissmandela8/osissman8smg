import Nav from "../components/Nav";

function LDK() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen mt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Keseruan LDK
            </h1>

            <iframe
              className="w-full aspect-video rounded-[25px] mt-5"
              src="https://www.youtube.com/embed/5y6wmLA0Q3A?si=FaQcMqAy1MUq5Jti"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrymted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Aftermovie LDK"
            ></iframe>

            <p className="mt-5 text-[18px] md:text-22px">
              Latihan Dasar Kepemimpinan (LDK) OSIS/MPK SMA Negeri 8 Semarang
              tahun 2024 berlangsung dengan penuh semangat dan antusiasme.
              Kegiatan ini dirancang untuk membentuk karakter kepemimpinan siswa
              melalui serangkaian pelatihan, simulasi, dan diskusi kelompok yang
              melibatkan seluruh anggota OSIS dan MPK. Para peserta diajak untuk
              mengasah keterampilan komunikasi, kerja sama tim, dan pengambilan
              keputusan melalui berbagai aktivitas menarik yang dipandu oleh
              fasilitator berpengalaman, menciptakan suasana yang inspiratif dan
              penuh motivasi.
              <br />
              <br />
              Selain pelatihan formal, LDK juga diisi dengan kegiatan outbound
              yang seru, seperti permainan kelompok dan tantangan fisik, yang
              berhasil mempererat kebersamaan antarpeserta. Momen puncaknya
              adalah sesi refleksi malam hari, di mana siswa berbagi pengalaman
              dan visi mereka untuk organisasi sekolah. LDK ini tidak hanya
              memberikan bekal kepemimpinan, tetapi juga meninggalkan kenangan
              tak terlupakan yang memperkuat solidaritas dan semangat kolaborasi
              di kalangan anggota OSIS dan MPK.
            </p>
            <br />

            <a
              href="https://1024terabox.com/s/19DbTlMbXQkaHDrGcikt3bg"
              className="mt-5 text-[20px] md:text-24px font-bold text-purple-500 duration-300 hover:text-pink-500"
            >
              <i>Link Dokumentasi</i>
            </a>
          </div>
        </article>
      </main>
      <Nav />
    </>
  );
}

export default LDK;
