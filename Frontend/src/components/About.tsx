// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-white max-w-screen">
      <div className="flex justify-center items-center flex-wrap lg:flex-nowrap	">
        <div className="container mx-auto text-center lg:w-1/2 p-10 lg:mr-24">
          <h2 className="text-3xl font-bold mb-6">אודות ASPIRLI</h2>
          <p className="font-bold p-5">
            ASPIRLI הוא ממשק העצמה מותאם אישית לסטודנט שזקוק לליווי בקורסים
            בפיזיקה. בממשק אפשר לצפות בסרטונים על החומר, לענות על שאלות, לכתוב
            הערות תוך כדי השיעור ולשאול שאלות.
            
          </p>
          <p className="p-5">
            אני ליפז סעאת אספיר, בוגרת תואר ראשון בפיזיקה ותואר שני
            באסטרופיזיקה. חוקרת חומר אפל בצבירי גלקסיות. לשעבר אחראית על תחנת
            הקרקע של BGUSAT, הננו-לווין של אוניברסיטת בן גוריון ושותפה בקבוצת
            המחקר לשיפור רזולוציה לוויינית. כיום חלק מסגל הפיזיקה באוניברסיטת בן
            גוריון.
          </p>
          <p className="p-5">
            יצרתי את ASPIRLI במטרה לתת פתרון לסטודנטים שזקוקים לליווי של מורה
            פרטי איכותי- התאמה אישית לסילבוס (ואפילו למרצה) שלהם, התאמה ללוח
            הזמנים, התמקדות בקשיים הספציפיים של הסטודנט, עזרה בפתרון שיעורי בית-
            כל זה מבלי שהסטודנט יאלץ להוציא סכומי עתק, שכן קושי נוסף שסטודנטים
            בשלב זה ניצבים בפניו הוא הקושי הכלכלי.
          </p>
        </div>
      <div className="w-1/2 lg:mr-24">
      <img src="/about.png" ></img>
      </div>

      </div>
    </div>
  );
};

export default About;
