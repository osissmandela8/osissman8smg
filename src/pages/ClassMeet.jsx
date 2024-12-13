import Nav from "../components/Nav";
import Cover from "../assets/classmeet1/cover.jpeg";
import Esports from "../assets/classmeet1/esports.jpeg";
import Estafet from "../assets/classmeet1/estafet.jpeg";
import Futsal from "../assets/classmeet1/futsal.jpeg";
import K3 from "../assets/classmeet1/k3.jpeg";
import Poster from "../assets/classmeet1/poster.jpeg";
import Supporter from "../assets/classmeet1/support.jpeg";

function ClassMeet1() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Serunya Kegiatan Classmeet SMA Negeri 8 Semarang!
            </h1>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Cover}
              alt="Cover"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Halo teman-teman, apa kabar? SMAN 8 Semarang punya update seru nih
              seputar acara Classmeet yang baru saja digelar oleh OSIS kita!
              Acara berlangsung dari tanggal 10-13 Juni 2024, dan diikuti dengan
              penuh semangat oleh siswa-siswi kita.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Jenis Lomba
            </h2>

            <p className="pt-5 text-[18px] md:text-22px">
              Di Classmeet kali ini, ada banyak lomba seru yang diadakan:
            </p>
            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>E-Sport</li>
              <li>Poster Digital</li>
              <li>Estafet Pos</li>
              <li>K3 (Kebersihan, Keindahan, Kerapian)</li>
              <li>Futsal</li>
              <li>Best Supporter</li>
            </ul>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Pemenang Lomba
            </h2>

            <p className="pt-5 text-[18px] md:text-22px">
              Selamat kepada para pemenang yang telah menunjukkan kemampuan
              terbaiknya:
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Futsal
            </h3>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Futsal}
              alt="Pemenang Lomba Futsal"
            ></img>
            <ol className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XI-8</li>
              <li>Juara 2: X-3</li>
              <li>Juara 3: XI-9</li>
            </ol>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Estafet Pos
            </h3>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Estafet}
              alt="Pemenang Lomba Estafet"
            ></img>
            <ol className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XI-8</li>
              <li>Juara 2: X-6</li>
            </ol>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Best Supporter
            </h3>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Supporter}
              alt="Pemenang Lomba Supporter"
            ></img>
            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Terheboh: XI-8</li>
              <li>Terkreatif: XI-3</li>
            </ul>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Poster Digital
            </h3>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Poster}
              alt="Pemenang Lomba Poster Digital"
            ></img>
            <ul className="pt-2 text-[18px] md:text-22px">
              <li className="pt-5">
                <strong className="text-slate-400">Kelas X</strong>
                <ul className="pt-2 text-[18px] md:text-22px list-disc">
                  <li>Juara 1: X-2</li>
                  <li>Juara 2: X-1</li>
                </ul>
              </li>
              <li className="pt-5">
                <strong className="text-slate-400">Kelas XI</strong>
                <ul className="pt-2 text-[18px] md:text-22px list-disc">
                  <li>Juara 1: XI-2</li>
                  <li>Juara 2: XI-3</li>
                </ul>
              </li>
            </ul>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              E-Sport
            </h3>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Esports}
              alt="Pemenang Lomba Esports"
            ></img>
            <ol className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XI-2</li>
              <li>Juara 2: X-10</li>
            </ol>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              K3
            </h3>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={K3}
              alt="Pemenang Lomba K3"
            ></img>
            <ol className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XI-1</li>
              <li>Juara 2: X-1</li>
            </ol>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Penutup
            </h2>

            <p className="pt-5 text-[18px] md:text-22px">
              Pokoknya, Classmeet 2024 ini sukses besar deh! Semua peserta
              tampil maksimal dan kompak. Panitia juga sudah bekerja keras untuk
              memastikan acara berjalan lancar. Aku bangga banget sama
              teman-teman OSIS yang udah berjuang demi suksesnya acara ini.
            </p>

            <p className="pt-5 text-[18px] md:text-22px">
              Itulah dokumentasi singkat dari acara Classmeet yang baru saja
              digelar. Semoga kegiatan-kegiatan seru seperti ini bisa terus
              dilaksanakan, biar kita semakin kompak dan kreatif. Sampai jumpa
              lagi di acara OSIS berikutnya!
              <br />
              <br />
            </p>

            <a
              href="https://terabox.com/s/1cBrLePP1uW8WuvHCO9z09A"
              className="pt-5 text-[20px] md:text-24px font-bold text-purple-500 duration-300 hover:text-pink-500"
            >
              <i>Link Dokumentasi</i>
            </a>
          </div>
        </article>
      </main>
      <Nav />
    </>
  );
}

export default ClassMeet1;
