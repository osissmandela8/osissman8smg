import Header from "./Header.jsx";
import Kegiatan from "./Kegiatan.jsx";
import Sambutan from "./Sambutan.jsx";
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";

function App() {
  return (
    <div className="w-screen text-white">
      <Header />
      <main>
        <Sambutan />
        <Kegiatan />
      </main>
      <Footer />
      <Nav />
    </div>
  );
}

export default App;
