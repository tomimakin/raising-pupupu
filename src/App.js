import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Donate from "./screens/Donate";
import Footer from "./screens/Footer";
import Fundraise from "./screens/support/FundRaise";
import Volunteer from "./screens/support/Volunteer";
import SchoolUpgrades from "./screens/programs/SchoolUpgrades";
import NotFound from "./screens/NotFound";
import Contacts from "./screens/admin/Contacts";
import SchoolFees from "./screens/programs/SchoolFees";
import SmallBusinessFunds from "./screens/programs/SmallBusinessFunds";
import Campaigns from "./screens/admin/Campaigns";
import Login from "./screens/admin/Login";
import SOAlimi from "./screens/programs/SOAlimi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<About />} />
          <Route path="board" element={<About />} />
          <Route path="mission" element={<About />} />
        </Route>
        <Route path="/support/fundraise" element={<Fundraise />} />
        <Route path="/support/volunteer" element={<Volunteer />} />
        <Route path="/programs/schoolupgrades" element={<SchoolUpgrades />} />
        <Route path="/programs/sbfunds" element={<SmallBusinessFunds />} />
        <Route path="/programs/schoolfees" element={<SchoolFees />} />
        <Route path="/programs/soalimi" element={<SOAlimi />} />
        <Route path="/admin/contacts" element={localStorage.getItem("user")==="groot"?<Contacts />:<Login/>} />
        <Route path="/admin/campaigns" element={localStorage.getItem("user")==="groot"?<Campaigns />:<Login/>} />
        <Route path="/admin" element={<Login/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
