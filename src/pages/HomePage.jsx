import Header from "../components/Header.jsx";
import Kegiatan from "../components/Kegiatan.jsx";
import Sambutan from "../components/Sambutan.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Sambutan />
        <Kegiatan />
      </main>
    </>
  );
}

export default HomePage;
