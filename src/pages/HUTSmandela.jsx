import Nav from "../components/Nav";
import Cover from "../assets/hutsmandela/cover.png";
import Baksos from "../assets/hutsmandela/baksos.jpeg";
import Furo from "../assets/hutsmandela/furo.png";
import Projek from "../assets/hutsmandela/projek.png";
import Rebana from "../assets/hutsmandela/rebana.png";
import SGT from "../assets/hutsmandela/sgt.png";
import Stand from "../assets/hutsmandela/stand.png";

function HUTSmandela() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Keseruan Kegiatan HUT Smandela 2024
            </h1>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Cover}
              alt="Cover"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Dalam rangka memperingati Hari Ulang Tahun (HUT) SMA Negeri 8
              Semarang (Smandela) tahun 2024, berbagai kegiatan menarik dan
              penuh semangat telah dilaksanakan. Rangkaian acara ini melibatkan
              seluruh elemen sekolah, termasuk siswa, guru, serta masyarakat
              sekitar, dengan tujuan mempererat kebersamaan dan menampilkan
              kreativitas terbaik. Berikut laporan lengkapnya:
            </p>

            <iframe
              className="w-full aspect-video rounded-[25px] pt-5"
              src="https://www.youtube.com/embed/wSdXs9RB7cA?si=6rzARmV4hP4xO2pZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Aftermovie HUT Smandela"
            ></iframe>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              1. Hari Pertama: Pembagian Baksos (7 September 2024)
            </h2>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Baksos}
              alt="Baksos"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Rangkaian kegiatan dimulai pada tanggal 7 September 2024 dengan
              agenda pembagian bantuan sosial (baksos). Kegiatan ini melibatkan
              partisipasi aktif dari siswa, guru, dan staf sekolah yang bekerja
              sama untuk menyalurkan bantuan kepada masyarakat sekitar dan
              beberapa sekolah yang membutuhkan. Bantuan berupa kebutuhan pokok,
              perlengkapan pendidikan, serta barang kebutuhan lainnya
              disampaikan dengan penuh semangat kebersamaan.
            </p>

            <p className="pt-5 text-[18px] md:text-22px">
              Baksos ini mencerminkan kepedulian SMA Negeri 8 Semarang terhadap
              lingkungan sekitar, sekaligus memberikan pengalaman berharga
              kepada siswa dalam berbagi dan peduli terhadap sesama.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Pra-Acara HUT Smandela (13 September 2024)
            </h2>

            <p className="pt-5 text-[18px] md:text-22px">
              Pada tanggal 13 September 2024, pra-acara HUT Smandela berlangsung
              dengan agenda utama berupa apel pagi yang dihadiri seluruh siswa,
              guru, dan staf sekolah. Dalam apel ini, Kepala Sekolah
              menyampaikan sambutan yang memotivasi dan mengingatkan pentingnya
              menjaga solidaritas serta semangat berkarya di lingkungan sekolah.
            </p>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={SGT}
              alt="Smandela Got Talent"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Setelah apel, acara dilanjutkan dengan perlombaan “Smandela Got
              Talent”. Kegiatan ini menghadirkan berbagai penampilan luar biasa
              dari perwakilan setiap kelas, seperti menyanyi, menari, bermain
              alat musik, hingga seni pertunjukan lainnya. Kreativitas dan bakat
              siswa sangat terlihat dalam perlombaan ini, yang juga menjadi
              ajang menunjukkan potensi mereka.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Puncak Acara HUT Smandela (25 September 2024)
            </h2>

            <p className="pt-5 text-[18px] md:text-22px">
              Puncak perayaan HUT Smandela pada tanggal 25 September 2024
              berlangsung dengan megah dan meriah. Acara diawali dengan
              pembukaan resmi oleh Kepala Sekolah, Ketua Komite Sekolah, dan
              Ketua Panitia HUT. Ketiganya memberikan sambutan inspiratif yang
              mengajak seluruh warga sekolah untuk terus berinovasi dan
              berkontribusi bagi kemajuan sekolah.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Penyerahan Sertifikat Pemenang
            </h3>

            <p className="pt-5 text-[18px] md:text-22px">
              Setelah pembukaan, dilaksanakan penyerahan sertifikat penghargaan
              kepada para pemenang lomba “Smandela Got Talent” sebagai bentuk
              apresiasi atas kreativitas mereka.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Penampilan Ekstrakurikuler
            </h3>

            <img
              className="pt-5 pb-2 rounded-[25px] w-full"
              src={Rebana}
              alt="Penampilan Ekstrakurikuler Rebana"
            ></img>

            <strong className="text-slate-400">
              Acara dilanjutkan dengan berbagai penampilan spektakuler dari
              ekstrakurikuler, antara lain:
            </strong>
            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Rebana: Membawakan lagu-lagu religi yang memukau.</li>
              <li>
                Tari Tradisional: Menampilkan gerakan anggun khas budaya lokal.
              </li>
              <li>Dance Modern: Menghidupkan suasana dengan tarian energik.</li>
              <li>
                Paduan Suara: Menyajikan harmoni suara yang indah melalui
                lagu-lagu pilihan.
              </li>
            </ul>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Projek}
              alt="Penampilan Projek Kelas 10"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Selain itu, siswa kelas 10 turut menampilkan proyek P5 mereka,
              yang menunjukkan kreativitas dalam berbagai tema pengembangan diri
              dan lingkungan.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Stand Makanan Kelas 12
            </h3>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Stand}
              alt="Stand Makanana Kelas 12"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Para siswa kelas 12 juga berkontribusi dengan menghadirkan stand
              makanan yang menyajikan beragam hidangan lezat. Stand ini menjadi
              daya tarik tersendiri, memperkaya pengalaman pengunjung di puncak
              acara.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Penampilan Ekstra Spesial
            </h3>

            <p className="pt-5 text-[18px] md:text-22px">
              Menambah kemeriahan, ekstrakurikuler band guru tampil dengan
              penampilan spesial yang memukau. Penampilan ini menjadi momen
              istimewa, menunjukkan kebersamaan antara siswa dan guru dalam
              merayakan HUT Smandela.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Guest Star: Band Furo
            </h3>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Furo}
              alt="Penampilan Band Furo"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Sebagai puncak hiburan, acara ditutup dengan penampilan dari Band
              Furo sebagai guest star. Band ini berhasil menyihir penonton
              dengan performa yang energik dan membangkitkan semangat. Kehadiran
              mereka menutup perayaan HUT Smandela dengan kesan yang mendalam
              dan meriah.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Kesimpulan
            </h2>

            <p className="pt-5 text-[18px] md:text-22px">
              Perayaan HUT Smandela 2024 berjalan dengan sukses besar. Seluruh
              rangkaian acara tidak hanya memberikan hiburan dan kemeriahan,
              tetapi juga mempererat hubungan antarwarga sekolah dan menanamkan
              nilai-nilai kebersamaan, kreativitas, dan kepedulian sosial.
              Semoga semangat ini terus menjadi inspirasi bagi kegiatan-kegiatan
              sekolah berikutnya.
            </p>

            <p className="pt-5 pb-5 text-[18px] md:text-22px">
              HUT Smandela 2024 membuktikan bahwa kolaborasi dan kerja sama
              adalah kunci keberhasilan untuk mencapai tujuan bersama!
            </p>

            <a
              href="https://terabox.com/s/1738pz42nYGN50NJiMpIXww"
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

export default HUTSmandela;
