import Nav from "../components/Nav";
import { db } from "../App"; // Impor db dari App.jsx
import { collection, addDoc } from "firebase/firestore";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil nilai dari input
    const nama = document.getElementById("nama").value;
    const jabatan = document.getElementById("jabatan").value;
    const tanggalLahir = document.getElementById("tanggal_lahir").value;
    const hobby = document.getElementById("hobby").value;
    const kesanPesan = document.getElementById("kesan_pesan").value;
    const instagram = document.getElementById("instagram").value;

    try {
      // Simpan data ke Firestore
      const docRef = await addDoc(collection(db, "members"), {
        nama: nama,
        jabatan: jabatan,
        tanggal_lahir: tanggalLahir,
        hobby: hobby,
        kesan_pesan: kesanPesan,
        instagram: instagram,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Data berhasil disimpan!");
      // Reset form setelah submit
      e.target.reset();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Gagal menyimpan data: " + e.message);
    }
  };

  return (
    <>
      <main className="grid place-items-center bg-[#171717] pb-10">
        <form
          className="w-screen mt-14 md:w-[768px] p-[24px] text-lg"
          onSubmit={handleSubmit}
        >
          <label htmlFor="nama">Nama Lengkap:</label>
          <br />
          <input type="text" id="nama" name="nama" required />
          <br />
          <label htmlFor="jabatan">Jabatan:</label>
          <br />
          <select id="jabatan" name="jabatan" required>
            <option value="ketua_osis">Ketua OSIS</option>
            <option value="wakil_ketua_osis">Wakil Ketua OSIS</option>
            <option value="sekretaris">Sekretaris</option>
            <option value="bendahara">Bendahara</option>
            <option value="sekbid_1">Sekbid 1</option>
            <option value="sekbid_2">Sekbid 2</option>
            <option value="sekbid_3">Sekbid 3</option>
            <option value="sekbid_4">Sekbid 4</option>
            <option value="sekbid_5">Sekbid 5</option>
            <option value="sekbid_6">Sekbid 6</option>
            <option value="sekbid_7">Sekbid 7</option>
            <option value="sekbid_8">Sekbid 8</option>
            <option value="sekbid_9">Sekbid 9</option>
            <option value="sekbid_10">Sekbid 10</option>
          </select>
          <br />
          <label htmlFor="tanggal_lahir">Tanggal Lahir:</label>
          <br />
          <input type="date" id="tanggal_lahir" name="tanggal_lahir" required />
          <br />
          <label htmlFor="hobby">Interest/Hobby:</label>
          <br />
          <input type="text" id="hobby" name="hobby" required />
          <br />
          <label htmlFor="kesan_pesan">Kesan/Pesan:</label>
          <br />
          <textarea
            id="kesan_pesan"
            name="kesan_pesan"
            rows="4"
            cols="50"
            required
          ></textarea>
          <br />
          <label htmlFor="instagram">Instagram:</label>
          <br />
          <input
            type="text"
            id="instagram"
            name="instagram"
            placeholder="@username"
            required
          />
          <br />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </main>
      <Nav />
    </>
  );
}

export default Form;
