import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-500  p-8 text-center flex justify-around">
      <div >
        <p className="text-lg font-bold">ASPIRLI</p>
        <p>זכויות יוצרים © 2023 כל הזכויות שמורות</p>
      </div>
      <div className="mt-4">
        <nav className="flex justify-center">
        <Link to="/" className="p-3">דף הבית</Link>
        <Link to="/Personalarea" className="p-3">איזור אישי</Link>
        <Link to="/services" className="p-3">שירותים</Link>
        <Link to="/courses" className="p-3">קורסים נוספים</Link>
        <Link to="/login" className="p-3">התחבר</Link>
        <Link to="/Register" className="p-3">הירשם</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
