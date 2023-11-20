import { Link } from "react-router-dom";

function Navbar() {
return (
    <div className="bg-mint w-screen flex flex-row justify-evenly">
        <img src="logo.png" alt="logo" width={150}></img>
        <div className="flex flex-row justify-center mt-10">
            <Link to="/" className="p-3">דף הבית</Link>
            <Link to="Personalarea" className="p-3">איזור אישי</Link>
            <Link to="/services" className="p-3">שירותים</Link>
            <Link to="/courses" className="p-3">קורסים נוספים</Link>
            <Link to="/about" className="p-3">אודות</Link>
            <Link to="/contact" className="p-3">צור קשר</Link>
        </div>
    </div>
    );
}

export default Navbar;
