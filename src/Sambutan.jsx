function Sambutan() {
  return (
    <article
      id="sambutan"
      className="h-screen bg-[url('assets/sambutan.png')] bg-center bg-cover grid place-items-center"
    >
      <div
        className="absolute left-0 pl-[160px] py-20 pr-24 h-[85%] w-[900px] bg-neutral-900 rounded-tr-[100px] rounded-br-[100px]"
        data-aos="fade-right"
      >
        <h2 className="font-bold text-7xl">Sambutan</h2>
        <br />
        <p className="text-3xl font-normal">
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
          kami, yakni halaman portal website OSIS SMA Negeri 8 Semarang. Semoga
          hal baru ini dapat menjadi sarana dan wadah kreativitas dan informasi
          bagi seluruh warga sekolah.
          <br />
          <br />
          <em className="text-4xl font-bold text-pink-500">
            Smandela, We Are Solid!
          </em>
        </p>
      </div>
    </article>
  );
}

export default Sambutan;
