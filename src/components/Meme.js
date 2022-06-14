import memesData from "../memesData";
import "../App.css";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input className="form-input" placeholder="Top text" type="text" />
        <input className="form-input" placeholder="bottom text" type="text" />
        <button onClick={getMemeImage} className="form-button">
          Get a new meme image
        </button>
      </div>
      <img src={memeImage} className="meme-image" />
    </main>
  );
}
