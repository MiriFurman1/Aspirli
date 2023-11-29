import React from 'react'

function Main() {
  return (
    <div className="flex justify-center items-center h-[700px] flex-wrap ">
    <img
      src="/main-section.jpg"
      width={300}
      height={300}
      className="rounded-full w-[300px] h-[300px] object-cover m-10"
      alt="main"
    ></img>
    <div>
      <h1>Aspirli</h1>
      <p>ממשק ליווי להצלחה בקורסי הפיזיקה</p>
    </div>
  </div>
  )
}

export default Main