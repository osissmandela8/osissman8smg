function Header() {
  return (
    <header
      id="header"
      className="h-[90vh] md:h-screen bg-[url('assets/phone/header.png')] md:bg-[url('assets/tablet/header.png')] lg:bg-[url('assets/desktop/header.png')]  bg-center bg-cover grid place-items-center"
    >
      <div
        className="absolute content-center py-2 md:py-4 px-4 md:px-8 bottom-[5vh] bg-neutral-900 rounded-[25px]  grid place-items-center text-center"
        data-aos="zoom-out"
      >
        <h1 className="text-3xl font-bold text-pink-500 md:text-5xl">
          OSIS SMAN 8 Semarang
        </h1>
        <em className="text-xl font-medium md:text-4xl">2023/2024</em>
      </div>
    </header>
  );
}

export default Header;
