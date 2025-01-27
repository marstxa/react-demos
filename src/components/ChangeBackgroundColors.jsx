import React, { useState } from "react";

function ChangeBackgroundColors() {
  const [backgroundColor, setBackgroundColor] = useState("bg-base-300");
  const [textColor, setTextColor] = useState("text-primary");
  const [buttonColor, setButtonColor] = useState("btn-primary");
  const [image, setImage] = useState("src/assets/umbreon.png");

  const handleClick = () => {
    setBackgroundColor(
      backgroundColor === "bg-base-300" ? "bg-pink-300" : "bg-base-300"
    );
    setTextColor(
      textColor === "text-primary" ? "text-blue-300" : "text-primary"
    );
    setButtonColor(
      buttonColor === "btn-primary" ? "btn-secondary" : "btn-primary"
    );
    setImage(
      image === "src/assets/umbreon.png"
        ? "src/assets/tinkaton.gif"
        : "src/assets/umbreon.png"
    );
  };

  return (
    <div
      className={`w-full max-h-screen h-screen ${backgroundColor} flex justify-center items-center m-20 flex-col gap-6`}
    >
      <h1 className={`${textColor} text-7xl font-bold`}>
        Please Gamefreak release a good game
      </h1>
      <button
        className={`btn btn-sm ${buttonColor} w-36 h-12`}
        onClick={handleClick}
      >
        From Emo To Cootie
      </button>
      <img class="max-w-72 h-auto" src={image} alt="Strange Animal" />
    </div>
  );
}

export default ChangeBackgroundColors;
