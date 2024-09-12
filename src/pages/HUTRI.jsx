import Nav from "../components/Nav";
import Cover from "../assets/hutri/cover.png";
import K3 from "../assets/hutri/k3.png";
import Krupuk from "../assets/hutri/krupuk.png";
import Peralon from "../assets/hutri/peralon.png";
import Pos from "../assets/hutri/pos.png";
import Tumpeng from "../assets/hutri/tumpeng.png";

function HUTRI() {
  return (
    <>
      <main>
        <article className="grid place-items-center bg-[#171717] pb-10">
          <div className="bg-center bg-cover"></div>
          <div className="w-screen pt-14 md:w-[768px] p-[24px]">
            <h1 className="text-[32px] md:text-[42px] font-bold">
              Keseruan HUT RI ke-79!
            </h1>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Cover}
              alt="Cover"
            ></img>

            <p className="pt-5 text-[18px] md:text-22px">
              Halo Loyalist! Tak terasa ya, Pra-HUT RI hingga sampai Pasca-HUT
              RI telah kita lewati bersama, dan pada tahun 2024 ini, Indonesia
              telah berusia 79 tahun loh, kita patut bangga!
            </p>

            <iframe
              className="w-full aspect-video rounded-[25px] pt-5"
              src="https://www.youtube.com/embed/HlmVto-D84E?si=1OTURrWjvYzrl4BT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              alt="Aftermovie HUT RI"
            ></iframe>

            <p className="pt-5 text-[18px] md:text-22px">
              Pastinya, kegiatan di bulan Agustus akan selalu diisi oleh event
              milik OSIS, yaitu event yang menaungi kegiatan perlombaan. Event
              ini juga selalu dinanti-nanti loh oleh warga sekolah, karena
              selain kegiatannya yang seru untuk mengasah kerjasama dan juga
              mengandung unsur perjuangan untuk meraih keberhasilan, dengan
              adanya kegiatan ini sebagai bentuk rasa persatuan yang dapat
              meningkatkan kesadaran kita akan jasa perjuangan kemerdekaan,
              serta dalam kegiatan ini juga akan membentuk rasa kekeluargaan
              bagi warga sekolah. Yuk, kita ulas bersama!
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Persiapan Event
            </h2>
            <p className="pt-5 text-[18px] md:text-22px">
              Mula-mula, event ini sudah kami rancang sedemikian rupa mulai dari
              konsep, sistematika, dan juga referensi dari saran Bapak Ibu guru
              pembina kami. Dalam event ini, kami juga punya tema loh
              teman-teman, yaitu{" "}
              <span class="highlight">“Sadbhavana Abhaya”</span> yang merupakan
              bahasa sansekerta dan dapat diartikan sebagai pentingnya persatuan
              dan kerjasama dalam mencapai kemerdekaan, serta semangat
              keberanian yang diperlukan untuk menghadapi tantangan dan
              menghilangkan ketakutan. Menarik, kan?
            </p>

            <p className="pt-5 text-[18px] md:text-22px">
              Kami juga memutuskan beberapa bidang perlombaan yang kami adakan:
            </p>
            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Estafet Pos</li>
              <li>Bola Peralon</li>
              <li>Menghias Tumpeng</li>
              <li>Makan Kerupuk Ikat Jempol Kaki</li>
              <li>K3</li>
            </ul>
            <p className="pt-5 text-[18px] md:text-22px">
              Fun fact, beberapa bidang perlombaan seperti Bola Peralon dan
              Menghias Tumpeng adalah bidang perlombaan yang sebelumnya belum
              pernah dilaksanakan loh! OSIS mengembangkan ide cemerlang dan
              membentuk warna baru untuk event di periode 2024/2025.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Jadwal Kegiatan
            </h2>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              8 Agustus 2024 - Technical Meeting Event Sadbhavana Abhaya
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Hai hai! Di hari ini kita mengadakan technical meeting event
              HUT-RI nih, yang diikuti oleh perwakilan kelas X sampai dengan
              kelas XII. Adanya Technical Meeting ini pastinya kami selaku OSIS
              sekaligus panitia memberikan arahan bagi siswa-siswi dalam
              melaksanakan perlombaan sesuai dengan juru teknisi, sehingga
              dengan adanya koordinasi yang baik, eventnya bisa sukses.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              11 Agustus 2024 - Launching Feeds event di Instagram
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Next, segala informasi mengenai event OSIS kami juga mengandalkan
              media sosial Instagram sebagai sarana informasi kami yang akurat.
              Feeds tersebut tercipta atas hasil dari kerja keras Tim
              Dokumentasi dan Publikasi event HUT-RI. Give them applause!
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              11-13 Agustus 2024 - Gladi dan Persiapan Event HUT RI!
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Seluruh pihak panitia HUT RI pada hari itu sangat bekerja keras
              untuk mempersiapkan event ini agar berjalan dengan sukses.
              Semangat panitia tak pernah pudar!
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              14 Agustus 2024 - Hari Pertama Perlombaan
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Pada hari pertama ini, setelah kami menyelesaikan kegiatan Upacara
              Hari Pramuka, kami melaksanakan kegiatan perlombaan di lapangan
              tengah. Perlombaan yang diadakan adalah Lomba Menghias Tumpeng dan
              Lomba Makan Kerupuk Ikat Jempol Kaki.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              15 Agustus 2024 - Hari Kedua Perlombaan
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Di hari kedua, perlombaan diadakan di Lapangan Atas dan Lapangan
              Futsal. Ada Lomba Estafet Pos dan Lomba Bola Paralon. Siswa-siswi
              sangat antusias mengikuti berbagai rangkaian lomba yang seru dan
              penuh tantangan.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              16 Agustus 2024 - Hari Ketiga Perlombaan
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Hari ketiga, kegiatan utama adalah jalan sehat dan lomba K3,
              tradisi yang bertujuan untuk menciptakan lingkungan belajar yang
              nyaman dan bersih.
            </p>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              17 Agustus 2024 - Upacara HUT-RI dan Pembagian Hadiah Pemenang
              Perlombaan
            </h3>
            <p className="pt-5 text-[18px] md:text-22px">
              Selamat Hari Kemerdekaan Republik Indonesia yang ke-79! Agenda
              kami di hari ini adalah mengikuti Upacara Bendera Merah Putih, dan
              setelah itu pembagian hadiah pemenang lomba sebagai bentuk
              apresiasi kami.
            </p>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Pemenang Lomba HUT-RI
            </h2>
            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Lomba Estafet Pos
            </h3>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Pos}
              alt="Estafet Pos"
            ></img>

            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XI-9</li>
              <li>Juara 2: XI-1</li>
              <li>Juara 3: X-7</li>
            </ul>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Lomba Bola Peralon
            </h3>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Peralon}
              alt="Bola Peralon"
            ></img>

            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XI-2</li>
              <li>Juara 2: XII-5</li>
              <li>Juara 3: XI-9</li>
            </ul>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Lomba Makan Kerupuk Ikat Jempol Kaki
            </h3>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Krupuk}
              alt="Kerupuk Ikat Jempol"
            ></img>

            <ul className="pt-2 text-[18px] md:text-22px list-disc">
              <li>Juara 1: XII-1</li>
              <li>Juara 2: X-8</li>
              <li>Juara 3: XI-9</li>
            </ul>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              Lomba Menghias Tumpeng
            </h3>

            <img
              className="pt-5 rounded-[25px] w-full"
              src={Tumpeng}
              alt="Menghias Tumpeng"
            ></img>

            <ul className="pt-2 text-[18px] md:text-22px">
              <li>
                <strong className="text-slate-400">Kelas X:</strong>
                <ul className="text-[18px] md:text-22px list-disc">
                  <li>Juara 1: X-2</li>
                  <li className="pb-5">Juara 2: X-6</li>
                </ul>
              </li>
              <li>
                <strong className="pt-5 text-slate-400">Kelas XI:</strong>
                <ul className="text-[18px] md:text-22px list-disc">
                  <li>Juara 1: XI-4</li>
                  <li className="pb-5">Juara 2: XI-1</li>
                </ul>
              </li>
              <li>
                <strong className="text-slate-400">Kelas XII:</strong>
                <ul className="text-[18px] md:text-22px list-disc">
                  <li>Juara 1: XII-1</li>
                  <li>Juara 2: XII-3</li>
                </ul>
              </li>
            </ul>

            <h3 className="pt-5 text-[20px] md:text-24px font-bold text-purple-500">
              K3
            </h3>

            <img className="pt-5 rounded-[25px] w-full" src={K3} alt="K3"></img>

            <ul className="pt-2 text-[18px] md:text-22px">
              <li>
                <strong className="text-slate-400">Juara Umum:</strong>
                <ul className="text-[18px] md:text-22px list-disc">
                  <li>Juara 1: XI-3</li>
                  <li>Juara 2: XI-2</li>
                  <li className="pb-5">Juara 3: XII-1</li>
                </ul>
              </li>
              <li>
                <strong className="text-slate-400">Juara Harapan:</strong>
                <ul className="text-[18px] md:text-22px list-disc">
                  <li>Juara 1: XII-3</li>
                  <li>Juara 2: X-7</li>
                  <li>Juara 3: XI-1</li>
                </ul>
              </li>
            </ul>

            <h2 className="pt-5 text-[20px] md:text-24px font-bold text-pink-500">
              Penutup
            </h2>
            <p className="pt-5 text-[18px] md:text-22px">
              Akhirnya, kegiatan perlombaan HUT-RI telah selesai dilaksanakan!
              Antusias warga sekolah membuat kami semangat untuk mengembangkan
              event lebih baik di masa depan. Sampai jumpa di event HUT-RI tahun
              depan teman-teman Smandela!
            </p>
            <p className="pt-2 pb-2 text-[18px] md:text-22px">
              <strong className="text-slate-400">
                Selamat Hari Kemerdekaan Republik Indonesia yang ke-79!
              </strong>
            </p>
            <p className="pb-5 text-[18px] md:text-22px">
              Nusantara baru, Indonesia Maju.
            </p>

            <a
              href="https://terabox.com/s/1h-L1Ylk0BYkPjvbldBddSw"
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

export default HUTRI;
