function Sambutan() {
  return (
    <div className="relative h-screen bg-[url('assets/sambutan.png')] bg-center bg-cover grid place-items-center">
      <div className="w-[900px] h-[850px] left-0 bg-neutral-900 rounded-tr-[100px] rounded-br-[100px] absolute" />
      <div className="left-[160px] w-[650px] absolute">
        <h2 className="text-white text-7xl font-bold font-['Inter'] pb-6 pt-0">
          Sambutan
        </h2>
        <span className="text-neutral-200 text-3xl font-normal font-['Inter'] top-">
          Asalamu&apos;salaikum Warahmatullah wabarakatuh
          <br />
        </span>
        <span className="text-neutral-200 text-3xl font-normal font-['Inter']">
          <br />
          Hai Loyalist!
          <br />
          Saya
        </span>
        <span className="text-white text-3xl font-normal font-['Inter']">
          {" "}
        </span>
        <span className="text-pink-500 text-3xl font-bold font-['Inter']">
          Arantama Manna Dawai
        </span>
        <span className="text-white text-3xl font-normal font-['Inter']">
          {" "}
        </span>
        <span className="text-neutral-200 text-3xl font-normal font-['Inter']">
          sebagai ketua OSIS SMA Negeri 8 Semarang periode 2023/2024 turut
          menyambut bahagia atas diluncurkannya sebuah inovasi terbaru dari
          kami, yakni halaman portal website OSIS SMA Negeri 8 Semarang. <br />
          <br />
          Semoga hal baru ini dapat menjadi sarana dan wadah kreativitas dan
          informasi bagi seluruh warga sekolah.
          <br />
        </span>
        <span className="text-pink-500 text-4xl font-bold font-['Inter']">
          <br />
          Smandela, We Are Solid!
        </span>
      </div>
    </div>
  );
}

export default Sambutan;
