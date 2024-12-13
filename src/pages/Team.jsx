import Nav from "../components/Nav";

function Team() {
  return (
    <>
      <main>
        <div className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[768px] p-[24px]">
            <h2 className="pb-5 text-3xl font-bold text-center md:text-6xl">
              Tim Kami
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center text-xs md:text-2xl font-bold w-screen md:w-[768px]">
              <p className="bg-black">asdfsadf</p>
              <p>asdfsadf</p>
              <p>asdfsadf</p>
              <p>asdfsadf</p>
            </div>
          </div>
        </div>
      </main>
      <Nav />
    </>
  );
}

export default Team;
