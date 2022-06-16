import memesData from "../memesData";
import "../App.css";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <div className="meme">
        <img src={meme.randomImage} alt="sd" className="meme-image" />
        <h2 className="meme-text top">One does not simply</h2>
        <h2 className="meme-text bottom">walk into mordor</h2>
      </div>
    </main>
  );
}
