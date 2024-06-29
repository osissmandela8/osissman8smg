function Footer() {
  return (
    <footer className="h-[25vh] bg-neutral-950 grid content-center grid place-items-center">
      <div className="w-screen md:w-[768px] px-[16px]">
        <div className="pb-4 text-2xl font-bold md:text-4xl">Ikuti kami!</div>
        <ul>
          <li className="inline mr-12 text-base font-bold text-purple-500 duration-300 ease-in-out md:mr-24  md:text-xl  hover:text-pink-500">
            <a href="https://www.instagram.com/osissmandela/">Instagram</a>
          </li>
          <li className="inline mr-12 text-base font-bold text-purple-500 duration-300 ease-in-out md:mr-24  md:text-xl  hover:text-pink-500">
            <a href="https://www.tiktok.com/@smandelaofficial?_t=8jDX1sEu1OD&_r=1">
              Tiktok
            </a>
          </li>
          <li className="inline mr-12 text-base font-bold text-purple-500 duration-300 ease-in-out md:mr-24  md:text-xl  hover:text-pink-500">
            <a href="https://www.youtube.com/@smandelaofficial736">YouTube</a>
          </li>
        </ul>
        <div className="left-0 pt-4 text-[8px] font-bold text-neutral-400">
          © 2024 OSIS SMAN 8 Semarang
        </div>
      </div>
    </footer>
  );
}

export default Footer;
