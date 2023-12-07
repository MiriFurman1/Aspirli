import { Link, useNavigate } from "react-router-dom";

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
    <div className="bg-mint max-w-screen flex flex-row justify-evenly flex-wrap w-full  ">
      <img src="logo.png" alt="logo" width={150}></img>
      <div className="flex flex-row justify-center items-center mt-10">
        <Link to="/" className="p-3">דף הבית</Link>
        <Link to="/Personalarea" className="p-3">איזור אישי</Link>
        <Link to="/services" className="p-3">שירותים</Link>
        <Link to="/courses" className="p-3">קורסים נוספים</Link>
        <button  onClick={() => handleSectionClick("about")} className="bg-transparent border-none text-black hover:text-blue-500">אודות</button>
        <button onClick={() => handleSectionClick("contact")} className="bg-transparent border-none text-black hover:text-blue-500">צור קשר</button>
        <Link to="/login" className="p-3">התחבר</Link>
        <Link to="/Register" className="p-3">הירשם</Link>
      </div>
    </div>
  );
}

export default Navbar;
