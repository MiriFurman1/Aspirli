import { Link } from "react-router-dom";

function Navbar() {
return (
    <div className="bg-mint max-w-screen flex flex-row justify-evenly flex-wrap">
        <img src="logo.png" alt="logo" width={150}></img>
        <div className="flex flex-row justify-center mt-10">
            <Link to="/" className="p-3">דף הבית</Link>
            <Link to="Personalarea" className="p-3">איזור אישי</Link>
            <Link to="/services" className="p-3">שירותים</Link>
            <Link to="/courses" className="p-3">קורסים נוספים</Link>
            <a href="#about" className="p-3">אודות</a>
            <a href="#contact" className="p-3">צור קשר</a>
            <Link to="/" className="p-3">התחבר</Link>
            <Link to="/" className="p-3"> הירשם</Link>
        </div>
    </div>
    );
}

export default Navbar;
