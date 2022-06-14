import trollface from "../assets/trollface.png";
import "../App.css";

export default function Header() {
  return (
    <div>
      <div className="navbar">
        <img src={trollface} alt="aga" />
        <h2>Meme Generator</h2>
      </div>
    </div>
  );
}
