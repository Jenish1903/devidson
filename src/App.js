import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Pageout from "./Component/Pageout";
import Project from "./Component/Project";
import Gallery from "./Component/Gallery";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Swiperexample from "./Component/Swiper";

function App() {
  return (
    <>
      <BrowserRouter>
        <Pageout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/swiper" element={<Swiperexample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
