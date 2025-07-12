import Nav from "../components/Nav";

function PORSENI() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen mt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Keseruan PORSENI
            </h1>

            <iframe
              className="w-full aspect-video rounded-[25px] mt-5"
              src="https://www.youtube.com/embed/yjQ5AA1iRCI?si=rkF4MJYwJW8LAJaz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrymted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Aftermovie LDK"
            ></iframe>

            <p className="mt-5 text-[18px] md:text-22px">
              Porseni SMA Negeri 8 Semarang, yang dikenal sebagai "Sparkora,"
              diadakan pada 16 Desember 2024 dengan semangat yang membara. Acara
              ini menampilkan berbagai lomba menarik seperti parade kostum,
              e-sport mobile legends, dan poster digital yang memamerkan
              kreativitas siswa. Selain itu, kompetisi futsal dan penampilan
              band akustik menambah keseruan, sementara estafet pos menjadi
              salah satu daya tarik dengan dinamika tim yang seru dan penuh
              strategi.
              <br />
              <br />
              Kegiatan ini juga berhasil memadukan bakat individu dan
              kebersamaan antarwarga sekolah melalui kolaborasi dalam setiap
              lomba. Penampilan siswa dalam parade kostum dan poster digital
              menunjukkan sentuhan artistik, sementara kompetisi futsal dan
              estafet pos menghadirkan semangat kompetitif yang sehat,
              menciptakan suasana penuh antusiasme dan solidaritas di kalangan
              peserta.
            </p>
            <br />
          </div>
        </article>
      </main>
      <Nav />
    </>
  );
}

export default PORSENI;
