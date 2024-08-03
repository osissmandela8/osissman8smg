import { Link } from "react-router-dom";

function Profil() {
  return (
    <section
      id="profil"
      className="grid h-[90vh] md:h-screen place-items-center bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div data-aos="fade-up">
        <h2 className="pb-5 text-3xl font-bold text-center md:text-6xl">
          Video Profil OSIS
        </h2>
        <div className="h-[65vh] md:h-[75vh] w-screen md:w-[768px] p-[24px] grid">
          <iframe
            src="https://www.youtube.com/embed/SGgokA4yLI8"
            className="w-full h-full rounded-[25px]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Profil;
