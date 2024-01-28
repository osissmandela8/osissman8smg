function Sambutan() {
  return (
    <article
      id="sambutan"
      className="h-[90vh] md:h-screen bg-neutral-900 grid place-items-center md:bg-[url('assets/tablet/sambutan.png')] lg:bg-[url('assets/desktop/sambutan.png')] md:bg-center md:bg-cover"
    >
      <div
        className="grid place-items-center md:absolute md:left-0 md:h-[85vh] md:bg-neutral-900 md:rounded-tr-[100px] md:rounded-br-[100px] md:w-[480px] lg:w-[900px] px-[16px] md:px-[32px] lg:pl-[160px] lg:pr-24"
        data-aos="fade-right"
      >
        <div>
          <h2 className="text-4xl font-bold md:text-6xl lg:text-7xl">
            Sambutan
          </h2>
          <br />
          <p className="text-xl font-normal md:text-2xl lg:text-3xl">
            <span className="font-light">
              Asalamu&apos;alaikum Warahmatullah wabarakatuh
            </span>
            <br />
            <br />
            Hai Loyalist!
            <br />
            Saya{" "}
            <span className="font-bold text-pink-500">
              Arantama Manna Dawai
            </span>{" "}
            sebagai ketua OSIS SMA Negeri 8 Semarang periode 2023/2024 turut
            menyambut bahagia atas diluncurkannya sebuah inovasi terbaru dari
            kami, yakni halaman portal website OSIS SMA Negeri 8 Semarang.
            Semoga hal baru ini dapat menjadi sarana dan wadah kreativitas dan
            informasi bagi seluruh warga sekolah.
            <br />
            <br />
            <em className="text-2xl font-bold text-pink-500 md:text-3xl lg:text-4xl">
              Smandela, We Are Solid!
            </em>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Sambutan;
