import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import PersonalArea from "./pages/PersonalArea";

function App() {
  return (
    <div className="w-screen h-screen">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/Personalarea" element={<PersonalArea/>}/>
      </Routes>

    </div>
  );
}

export default App;
