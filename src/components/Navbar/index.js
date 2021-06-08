import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaGamepad } from "react-icons/fa";
import { IconContext } from "react-icons";
import "./style.scss";

function Navbar() {
  const [linkGerado, setLinkGerado] = useState("/game/1");

  function mudaLink() {
    const linkRandom = (min, max) =>
      Math.floor(Math.random() * (max - min) + min);
    setLinkGerado("/game/" + linkRandom(1, 11));
    //console.log(linkGerado);
  }

  return (
    <div className="navbar__block">
      <IconContext.Provider value={{ className: "icons navbar" }}>
        <Link to="/">
          <FaHome />
        </Link>
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "icons navbar" }}>
        <Link to={linkGerado} onClick={mudaLink}>
          <FaGamepad />
        </Link>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
