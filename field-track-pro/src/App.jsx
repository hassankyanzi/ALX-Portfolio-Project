import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingLayout from "./layout/LandingLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about-us" element={<AboutUs />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
