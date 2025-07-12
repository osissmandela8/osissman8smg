import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Ramadhan from "./pages/Ramadhan.jsx";
import DimasDiajeng from "./pages/DimasDiajeng.jsx";
import ClassMeet from "./pages/ClassMeet.jsx";
import MPLS from "./pages/MPLS.jsx";
import HUTRI from "./pages/HUTRI.jsx";
import HUTSmandela from "./pages/HUTSmandela.jsx";
import LDK from "./pages/LDK.jsx";
import PORSENI from "./pages/PORSENI.jsx";
import Team from "./pages/Team.jsx";
import Form from "./pages/Form.jsx";

// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWzj1HJJSK3CdF9ddc8g0JmFeUtcfd37Q",
  authDomain: "osissman8smg-520e9.firebaseapp.com",
  projectId: "osissman8smg-520e9",
  storageBucket: "osissman8smg-520e9.firebasestorage.app",
  messagingSenderId: "1078280772608",
  appId: "1:1078280772608:web:213056a65eef3e894c8ce5",
  measurementId: "G-BKG0PR7LC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Export db for use in other files
export { db };

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/ramadhan" element={<Ramadhan />} />
        <Route path="/dimasdiajeng" element={<DimasDiajeng />} />
        <Route path="/classmeet" element={<ClassMeet />} />
        <Route path="/mpls" element={<MPLS />} />
        <Route path="/hutri" element={<HUTRI />} />
        <Route path="/hutsmandela" element={<HUTSmandela />} />
        <Route path="/porseni" element={<PORSENI />} />
        <Route path="/ldk" element={<LDK />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
