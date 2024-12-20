import TeamInfo from "../teamInfo.json";
import TeamPopup from "./TeamPopup";
import { useState } from "react";

function TeamCard() {
  const [activeMember, setActiveMember] = useState(null); // Store the active member

  return (
    <>
      {TeamInfo.map((member) => {
        return (
          <div
            key={member["Nama Lengkap"]}
            data-aos="fade-up"
            onClick={() => setActiveMember(member)}
          >
            <div className="grid w-full h-full pt-4 hover:scale-105 duration-300 ease-in-out bg-black rounded-[25px]">
              <div className="bg-center bg-cover bg-[url('assets/pria_romantis.jpeg')] w-[80%] aspect-square place-self-center pt-16 rounded-full"></div>
              <div className="mt-4">{member["Nama Lengkap"]}</div>
              <div className="texl-sm md:text-lg text-pink-500 mb-4">
                {member["Jabatan"]}
              </div>
            </div>
          </div>
        );
      })}

      {/* Render Popup Only When a Member is Active */}
      {activeMember && (
        <TeamPopup trigger={true} setTrigger={() => setActiveMember(null)}>
          <div className="fixed inset-0 backdrop-brightness-50 backdrop-blur grid">
            <div className="place-self-center bg-[#171717] w-[90%] h-[80%] mt-4 flex flex-col flex-1 md:flex-row rounded-[25px]">
              <div className="flex-1 flex justify-center justify-items-center">
                <div className="md:flex-1 m-16 md:m-24  h-[90%] md:h-auto place-self-center bg-center bg-cover bg-[url('assets/pria_romantis.jpeg')] aspect-square rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="md:mt-8 text-2xl md:text-4xl font-bold text-pink-500 text-center">
                  {activeMember["Nama Lengkap"]}
                </h2>
                <div className="m-8 mt-4 md:mt-8">
                  <h3 className="md:mt-5 text-lg md:text-2xl font-bold text-center">
                    Informasi
                    <ul className="md:mt-2 text-md md:text-xl font-normal text-start text-white">
                      <li>
                        <i className="bi bi-briefcase"></i>{" "}
                        {activeMember["Jabatan"]}
                      </li>
                      <li>
                        <i className="bi bi-palette"></i>{" "}
                        {activeMember["Interest/Hobby"]}
                      </li>
                      <li>
                        <i className="bi bi-cake"></i>{" "}
                        {activeMember["Tanggal Lahir"]}
                      </li>
                    </ul>
                  </h3>
                  <h3 className="md:mt-5 mt-4 text-lg md:text-2xl font-bold text-center">
                    Kata-kata
                  </h3>
                  <p className="font-normal text-md md:text-xl text-start">
                    {activeMember["Kesan/Pesan"]}
                  </p>
                  <p className="mt-5 font-bold text-purple-500 duration-300 hover:text-pink-500 text-start text-4xl ">
                    <a
                      href={`https://instagram.com/${activeMember["Instagram"]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"> </i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TeamPopup>
      )}
    </>
  );
}

export default TeamCard;
