import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function MainLayout() {
  return (
    <div className="w-screen text-white bg-black">
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;

// harusnya <Nav /> bisa ditaro disini trus mungkin di pass pake prop, cuma udh terlalu banyak waktu sia-sia mencoba hal tsb
