import Hero from "./Hero.jsx";
import Kegiatan from "./Kegiatan.jsx";
import Sambutan from "./Sambutan.jsx";

function App() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden overflow-y-auto">
      <Hero />
      <main>
        <Sambutan />
        <Kegiatan />
      </main>
    </div>
  );
}

export default App;
