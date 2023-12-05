// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div id="contact" className="py-16 bg-blue-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">צור קשר</h2>
        <div className="flex flex-wrap">
          <p className="text-blue-800">
           לתקלה טכנית חייגו  
            <a href="tel:+972-0546779851"> 054-6779851</a> <br/>
            aspirli29@gmail.com <br/>
             לשאלה על
            החומר הנלמד בשיעור שלחו הודעה לוואצאפ שלנו <br/>
           <a href="https://wa.me/972546779851">https://wa.me/972546779851</a> 
          </p>

          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
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
                className="w-full border py-2 px-3"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border py-2 px-3"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border py-2 px-3 h-32 resize-none"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;