import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Courses from "./pages/Courses";
import Services from "./pages/Services";
import PersonalArea from "./pages/PersonalArea";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className=" min-h-screen h-screen bg-lightOlive">
    <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/personalarea" element={<PersonalArea/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
      </Routes>

    </div>
  );
}

export default App;
