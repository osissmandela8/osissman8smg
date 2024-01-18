import Hero from "./Hero.jsx";
import Sambutan from "./Sambutan.jsx";

function App() {
  return (
    <div className="relative overflow-y-auto w-full h-screen overflow-x-hidden">
      <Hero />
      <Sambutan />
    </div>
  );
}

export default App;

{
  /* relative supaya bisa turun ga numpuk, h-screen biar full secara horizontal, settingan overflow buat ngilangin scrollbar */
}
