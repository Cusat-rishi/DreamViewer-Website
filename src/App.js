import Layoutmain from "./components/Layout/Layoutmain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import PageNotFound from "./pages/PageNotFound";
import Contactus from "./pages/Contactus";
import UiuxPage from "./pages/UiuxPage";
import WebApp from "./pages/WebApp";
import MobileApp from "./pages/MobileApp";
import Gaming from "./pages/Gaming";
import ErpSoftware from "./pages/ErpSoftware";
import Blockchain from "./pages/Blockchain";
import AiChatbot from "./pages/AiChatbot";
import Jobsopenings from "./pages/Jobsopenings";
import Whyus from "./pages/Whyus";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/UiuxPage" element={<UiuxPage />} />
          <Route path="/WebApp" element={<WebApp />} />
          <Route path="/MobileApp" element={<MobileApp />} />
          <Route path="/Gaming" element={<Gaming />} />
          <Route path="/ErpSoftware" element={<ErpSoftware />} />
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route path="/AiChatbot" element={<AiChatbot />} />
          <Route path="/Jobsopenings" element={<Jobsopenings />} />
          <Route path="/Whyus" element={<Whyus />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
