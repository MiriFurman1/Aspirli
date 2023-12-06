import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    navigate(`/#${sectionId}`);
    setTimeout(() => scrollToSection(sectionId), 0);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-mint max-w-screen flex flex-row justify-evenly flex-wrap">
      <img src="logo.png" alt="logo" width={150}></img>
      <div className="flex flex-row justify-center items-center mt-10">
        <NavLink to="/" className="p-3">דף הבית</NavLink>
        <NavLink to="/Personalarea" className="p-3">איזור אישי</NavLink>
        <NavLink to="/services" className="p-3">שירותים</NavLink>
        <NavLink to="/courses" className="p-3">קורסים נוספים</NavLink>
        <button  onClick={() => handleSectionClick("about")} className="bg-transparent border-none text-black hover:text-blue-500">אודות</button>
        <button onClick={() => handleSectionClick("contact")} className="bg-transparent border-none text-black hover:text-blue-500">צור קשר</button>
        <NavLink to="/login" className="p-3">התחבר</NavLink>
        <NavLink to="/Register" className="p-3">הירשם</NavLink>
       
      </div>
    </div>
  );
}

export default Navbar;
