
const Services = () => {
  return (
    <div className="text-center w-screen h-2/3 flex flex-col items-center">
      <h1 className="text-3xl m-10">שירותים נוספים</h1>

      <div className=" flex justify-around p-10 w-2/3">
        <div className="flex-1 m-4 p-4 border-2 border-gray-300 ">
          <h2 className="text-xl font-bold mb-4"> רכישת תרגיל נוסף</h2>
          <p className="mb-2">
            כאן ניתן לרכוש תרגילים נוספים לצפייה אינטראקטיבית.
          </p>
          <p className="mb-2">הסטודנט יבחר נושא ואז יבחר שאלה מרשימת שאלות.</p>
          <p>
            כמו כן יהיה לחצן "אין את השאלה שלי". בשני המקרים השאלה לא תעלה
            אוטומטית אלא המרצה יעלה לו את הסרטון לממשק התרגילים.
          </p>
        </div>
        <div className="flex-1 m-4 p-4 border-2 border-gray-300 p-5">
          <h2 className="text-xl font-bold mb-4">
            קורסים נוספים לרכישה
          </h2>
          <p className="mb-2">כאן תהיה רשימה של כל הקורסים שניתן לרכוש.</p>
          <p className="mb-2">
            רשימה זו תכלול קישורים של קורס עם מחיר. בלחיצה על הקישור: הסטודנט
            ישלם וישלח לחלון "המידע האישי שלי הקורס שלי" בכדי לסרוק את הפרטים של
            הקורס הנוסף.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
