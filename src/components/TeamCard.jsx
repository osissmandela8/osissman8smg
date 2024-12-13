import TeamInfo from "../teamInfo.json";

function TeamCard() {
  return (
    <>
      {TeamInfo.map((member) => {
        return (
          <>
            <div data-aos="fade-up">
              <div className="grid w-full h-full pt-4 hover:scale-105 duration-300 ease-in-out bg-black rounded-[25px]">
                <div className="bg-center bg-cover bg-[url('assets/pria_romantis.jpeg')] w-[80%] aspect-square place-self-center pt-16 rounded-full"></div>
                <div className="mt-4">{member["Nama Lengkap"]}</div>
                <div className="texl-sm md:text-lg text-pink-500 mb-4">
                  {member["Jabatan"]}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default TeamCard;
