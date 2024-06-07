import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function LandingLayout() {
  return (
    <>
      <div className="min-h-screen grid">
        <div className="bg-primary">
          <NavBar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default LandingLayout;
