function Navbar() {
return (
    <div className="bg-mint w-screen flex flex-row justify-evenly">
        <img src="logo.png" alt="logo" width={150}></img>
        <ul className="flex flex-row justify-center mt-10">
            <li className="p-3">דף הבית</li>
            <li className="p-3">איזור אישי מרצה</li>
            <li className="p-3">איזור אישי סטודנט</li>
            <li className="p-3">שירותים</li>
            <li className="p-3">קורסים נוספים</li>
            <li className="p-3">אודות</li>
            <li className="p-3">צור קשר</li>
        </ul>
    </div>
    );
}

export default Navbar;
