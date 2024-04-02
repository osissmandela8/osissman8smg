import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";

function MainLayout() {
  return (
    <div className="w-screen text-white bg-black">
      <Outlet />
      <Footer />
      <Nav />
    </div>
  );
}

export default MainLayout;
