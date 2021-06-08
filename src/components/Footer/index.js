import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./style.scss";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <ul>
          <li>
            <a
              href="https://twitter.com/quanticcode/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "icons" }}>
                <FaTwitter />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/quanticcompany"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "icons" }}>
                <FaFacebook />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/quanticcompany/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "icons" }}>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/quanticcode/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "icons" }}>
                <FaLinkedin />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCwep76XytilEmR7LN0tqi-A"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "icons" }}>
                <FaYoutube />
              </IconContext.Provider>
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          © 2021 - Todos direitos reservados. Feito por Quantic Code.
        </p>
      </div>
    </div>
  );
}

export default Footer;
