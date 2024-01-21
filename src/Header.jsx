function Header() {
  return (
    <header
      id="header"
      className="h-screen bg-[url('assets/hero.jpg')] bg-center bg-cover"
    >
      <div
        className=" absolute left-0 pl-[160px] py-4 pr-8 bottom-[48px] bg-neutral-900 rounded-tr-[50px] rounded-br-[50px] grid place-items-left"
        data-aos="fade-right"
      >
        <h1 className="font-bold text-purple-500 text-8xl">
          OSIS SMAN 8 Semarang
        </h1>
        <em className="text-5xl font-semibold">2023/2024</em>
      </div>
    </header>
  );
}

export default Header;
