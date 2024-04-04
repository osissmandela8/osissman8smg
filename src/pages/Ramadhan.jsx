import Cover from "../assets/ramadhan/cover.jpeg";
import Khitobah from "../assets/ramadhan/khitobah.jpg";
import Kaligrafi from "../assets/ramadhan/kaligrafi.jpeg";
import Pemenang from "../assets/ramadhan/pemenang.jpeg";
import Nav from "../components/Nav";

function Ramadhan() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Keseruan Event Ramadhan
            </h1>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Cover}
              alt="cover"
            ></img>
            <p className="pt-2 text-[18px] md:text-22px">
              Halo teman-teman, apa kabar? SMAN 8 ada update terbaru seputar
              acara MUNDELA yang baru saja digelar oleh OSIS SMAN 8 Semarang,
              nih. Acaranya berlangsung selama 3 hari, dari tanggal 13-15 Maret
              2023, bertempat di Masjid dan ruang serbaguna sekolah.
              <br />
              <br />
              Nah, selama 3 hari itu, kita semua sibuk banget lho! Sebagai
              panitia kita bekerja keras buat memastikan acara berjalan lancar
              dan sukses. Ada banyak perlombaan seru yang diikuti oleh
              siswa-siswi SMAN 8, mulai dari lomba adzan, khitobah, kaligrafi,
              sampai tartil Al-Quran. Semuanya berlomba dengan penuh semangat
              dan antusias, karena selain dapat hadiah, mereka juga bisa
              mendekatkan diri ke Allah SWT.
            </p>
            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Hari Pertama
            </h2>
            <p className="pt-2 text-[18px] md:text-22px">
              Pada hari pertama, tanggal 13 Maret, ada lomba tartil Al-Quran
              yang digelar di Masjid, serta lomba khitobah yang diselenggarakan
              di ruang serbaguna. Para peserta tampil dengan penuh semangat dan
              khusyuk, membuat suasana semakin khidmat.
            </p>
            <img className="pt-5 rounded-[25px] w-full" src={Khitobah}></img>
            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Hari Kedua
            </h2>
            <p className="pt-2 text-[18px] md:text-22px">
              Lalu, di hari kedua (14 Maret), giliran lomba adzan yang digelar
              di Masjid. Suara-suara merdu nan khusyuk membahana, membuat hati
              tenang dan damai. Sementara itu, di ruang serbaguna, ada lomba
              kaligrafi yang memamerkan karya-karya indah bertuliskan ayat suci
              Al-Quran.
            </p>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Kaligrafi}
              alt="kaligrafi"
            ></img>
            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Hari Terakhir
            </h2>
            <p className="pt-2 text-[18px] md:text-22px">
              Nah, di hari terakhir (15 Maret), acara puncaknya adalah pembagian
              hadiah bagi para pemenang. Semua peserta yang telah berjuang keras
              mendapatkan apresiasi dan penghargaan yang layak. Suasana semakin
              meriah dan penuh keberkahan.
            </p>
            <img
              className="pt-5 rounded-[25px] w-full"
              src={Pemenang}
              alt="pemenang"
            ></img>
            <p className="pt-5 text-[18px] md:text-22px">
              Pokoknya, acara MUNDELA ini sukses besar deh! Semua peserta tampil
              dengan maksimal dan kompak. Selain itu, panitia juga sudah bekerja
              keras buat memastikan acara berjalan lancar. Aku bangga banget
              sama teman-teman OSIS yang udah berjuang demi suksesnya acara ini.
              <br />
              <br />
              Nah, itulah dokumentasi singkat dari acara MUNDELA yang baru saja
              digelar. Semoga kegiatan-kegiatan positif seperti ini bisa terus
              dilaksanakan, biar kita sebagai umat Muslim bisa lebih dekat
              dengan Allah SWT. Sampai jumpa lagi ya!
              <br />
              <br />
            </p>
            <a
              href="https://drive.google.com/drive/folders/199JZNSLMdlSl3BPd4aECm0lcqdUao2j5"
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

export default Ramadhan;
