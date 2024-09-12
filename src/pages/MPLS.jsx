import Nav from "../components/Nav";
import Band from "../assets/mpls/band.png";
import Human from "../assets/mpls/human.png";
import Inagurasi from "../assets/mpls/inagurasi.png";
import Inagurasi2 from "../assets/mpls/inagurasi2.png";
import Cover from "../assets/mpls/cover.png";
import Paskibra from "../assets/mpls/paskibra.png";
import Rohis from "../assets/mpls/rohis.png";
import Sambutan from "../assets/mpls/sambutan.png";

function MPLS() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              MPLS SMA Negeri 8 Semarang 2024: Pengalaman Seru Siswa Baru!
            </h1>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Cover}
              alt="Cover"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Halo! MPLS (Masa Pengenalan Lingkungan Sekolah) tahun ini
              berlangsung dari 22 hingga 25 Juli 2024. Selama empat hari ini,
              SMA Negeri 8 Semarang mengadakan berbagai kegiatan seru dan
              bermakna untuk para peserta didik baru. Yuk, kita bahas serunya
              acara ini dari awal sampai akhir!
            </p>

            <iframe
              className="w-full aspect-video rounded-[25px] pt-5"
              src="https://www.youtube.com/embed/owClydda9-o?si=ND9vR5yy-Y5cFHww"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Aftermovie MPLS"
            ></iframe>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              22 Juli – Pembukaan MPLS 2024
            </h2>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Sambutan}
              alt="Sambutan"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Hari pertama, diawali dengan pengecekan kelengkapan siswa. Setelah
              itu, acara dimulai dengan upacara pembukaan yang dibuka langsung
              oleh kepala sekolah kita, Ibu Suparmi S.Pd., M.Pd. Dalam
              sambutannya, beliau berbagi banyak wawasan tentang{" "}
              <i>Kebijakan Pendidikan Menengah dan Persekolahan</i> di Smandela.
            </p>

            <p className="pt-5 text-[18px] md:text-22px">
              Setelah itu, Ibu Tutik Naviatun, S.Pd. (Waka Humas) menjelaskan
              tentang{" "}
              <i>
                Pengenalan Warga Sekolah, Stakeholder, Visi Misi, dan Program
                Unggulan Sekolah
              </i>
              . Lalu, siswa juga diberi penjelasan mengenai{" "}
              <b>Struktur Kurikulum Merdeka, Beban Belajar, dan Tagihan</b> oleh
              Bapak Haryana, S.Pd. (Waka Kurikulum).
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Materi selanjutnya disampaikan oleh Ibu Lyanna Oktavia, S.Pd.
              M.Pd. (Waka Kesiswaan) tentang{" "}
              <i>Penanaman Pendidikan Karakter dan Budi Pekerti</i> melalui
              Project Penguatan Profil Pelajar Pancasila.
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Hari pertama ditutup dengan doa dan menyanyikan lagu "Garuda
              Pancasila." Seru banget kan?
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              23 Juli – Iklim Sekolah dan Potensi Diri
            </h2>
            <p className="pt-5 text-[18px] md:text-22px">
              Hari kedua dibuka dengan apel dan pengecekan kesiapan. Seperti
              biasa, setelah doa dan lagu wajib "Indonesia Raya," siswa
              mendapatkan banyak ilmu dari berbagai pembicara. Materi pertama
              tentang <i>Menciptakan Iklim Sekolah yang Ramah Anak</i>{" "}
              disampaikan oleh PPA. Ruang Guru juga hadir memberikan pandangan
              tentang <i>Persiapan Masuk Kampus Impian</i> dan pentingnya
              mengenal studi lanjut setelah lulus SMA.
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Bapak Hardiko, S. Pd. M. Si (Tim Pengembang Kurikulum)
              menyampaikan tentang{" "}
              <i>Mengenali Potensi Diri dan Strategi Belajar Efektif</i> dalam
              Kurikulum Merdeka, dilanjutkan dengan pengenalan kegiatan{" "}
              <i>E-Literasi</i> di Smandela oleh Ibu Riris Purnamasari, M. Pd
              (Tim Kreatif Humas).
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Hari kedua diakhiri dengan doa dan lagu "Dari Sabang Sampai
              Merauke." Harinya penuh banget, ya!
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              24 Juli – Tata Krama dan Pramuka
            </h2>
            <p className="pt-5 text-[18px] md:text-22px">
              Sama seperti hari-hari sebelumnya, hari ketiga dimulai dengan apel
              dan lagu wajib. Setelahnya, peserta didik mendapat materi penting
              tentang{" "}
              <i>Disiplin Positif, Tata Tertib, dan Etika dalam Pembelajaran</i>{" "}
              oleh Ibu Yulia Utami, S.Psi. Materi ini disambung dengan
              penjelasan dari PKBI/psikolog tentang{" "}
              <i>
                Pencegahan dan Penanganan Kekerasan di Lingkungan Pendidikan
              </i>
              .
            </p>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Human}
              alt="Human Initiative Jateng"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Bapak Sumantri, S.Pd., kemudian menyampaikan tentang{" "}
              <i>
                Pramuka, Ekstra Kurikuler, dan Etika Birokrasi dalam Organisasi
              </i>
              . Selain itu, siswa juga mendapatkan <b>Edukasi Kebencanaan</b>{" "}
              dari Tim DRM Human Initiative Jateng dan motivasi dari OSIS/MPK
              untuk menciptakan <i>Lingkungan Belajar Inklusif dan Aman</i>.
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Seru, kan? Banyak banget yang bisa dipelajari hari itu.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              25 Juli – Demo Ekskul dan Inagurasi
            </h2>
            <p className="pt-5 text-[18px] md:text-22px">
              Hari terakhir MPLS 2024 dibuka dengan apel penutupan dan deklarasi
              anti-perundungan. Hari itu diisi dengan berbagai demo
              ekstrakurikuler yang keren! Ada dari{" "}
              <i>
                Loyalist, Ocient, ECC, Futsal, Handball, Basket, Jurnalistik,
                Pecinta Alam, Debat, Hockey, Rohis
              </i>
              , dan masih banyak lagi.
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Acara semakin meriah dengan <i>inagurasi</i> peserta didik baru
              yang dikelompokkan sesuai regu masing-masing. Setelah inagurasi,
              demo ekstrakurikuler pun berlanjut hingga sore hari.
            </p>
            <p className="pt-5 text-[18px] md:text-22px">
              Kita melihat penampilan demo ekstrakurikuler dari{" "}
              <i>
                Rebana, Modern Dance (Black Shadow Crew), Paduan Suara (GSC),
                Tari Tradisional (Astamataya), PMR, Pencak Silat (PSTD dan
                PSHT), Paskibra Delta, Sleepy Band, dan Band M-Rasev
              </i>
              .
            </p>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Inagurasi}
              alt="Inagurasi (1)"
            ></img>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Inagurasi2}
              alt="Inagurasi (2)"
            ></img>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Paskibra}
              alt="Paskibra"
            ></img>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Rohis}
              alt="Rohis"
            ></img>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Band}
              alt="Band"
            ></img>

            <p className="pt-5 pb-5 text-[18px] md:text-22px">
              Begitulah rangkaian MPLS 2024 di SMA Negeri 8 Semarang! Pengalaman
              ini pastinya memberikan kesan tak terlupakan bagi para siswa baru
              yang siap memulai petualangan akademis mereka di Smandela.
            </p>

            <a
              href=""
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

export default MPLS;
