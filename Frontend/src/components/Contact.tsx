// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div id="contact" className="py-16 bg-lightOlive">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-6">צור קשר</h2>
        <div className="flex flex-wrap">
          <p className="text-black">
           לתקלה טכנית חייגו  
            <a href="tel:+972-0546779851"> 054-6779851</a> <br/>
            aspirli29@gmail.com <br/>
             לשאלה על
            החומר הנלמד בשיעור שלחו הודעה לוואצאפ שלנו <br/>
           <a href="https://wa.me/972546779851">https://wa.me/972546779851</a> 
          </p>

          <form onSubmit={handleSubmit} className="mt-8 w-1/3 mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                שם
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border py-2 px-3 bg-grey bg-opacity-40 p-2 rounded"
                placeholder="שם"
                required

              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border py-2 px-3 bg-grey bg-opacity-40 p-2 rounded"
                placeholder="אימייל"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border py-2 px-3 h-32 resize-none bg-grey bg-opacity-40 p-2 rounded"
                placeholder="הודעה"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 p-2 rounded bg-green text-white disabled:bg-gray-500 hover:bg-mint"
            >
              שלח הודעה
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
