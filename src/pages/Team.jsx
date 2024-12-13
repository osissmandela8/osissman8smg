import Nav from "../components/Nav";
import TeamCard from "../components/TeamCard";

function Team() {
  return (
    <>
      <main>
        <div className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen mt-8 md:w-[768px] p-[24px]">
            <h2 className="mb-5 text-3xl font-bold text-center md:text-6xl">
              Tim Kami
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center text-m md:text-xl font-bold w-[100%] md:w-[768px]">
              <TeamCard />
            </div>
          </div>
        </div>
      </main>
      <Nav />
    </>
  );
}

export default Team;
