import Header from "../components/Header.jsx";
import Kegiatan from "../components/Kegiatan.jsx";
import Sambutan from "../components/Sambutan.jsx";
import HomeNav from "../components/HomeNav.jsx";
import Profil from "../components/Profil.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Sambutan />
        <Profil />
        <Kegiatan />
      </main>
      <HomeNav />
    </>
  );
}

export default HomePage;
