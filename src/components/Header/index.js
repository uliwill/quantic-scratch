import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import LogoD from "../../img/logo_topo.png";
import LogoM from "../../img/logo-quantic.png";
import "./style.scss";

function Header() {
  function abreModal() {
    document.querySelector(".modal__container").classList.add("active");
  }

  function fechaModal() {
    document.querySelector(".modal__container").classList.remove("active");
  }

  return (
    <div className="header__container">
      <div className="header__content">
        <a href="https://quanticcode.com/" target="_blank" rel="noreferrer">
          <img src={LogoD} alt="Logo Quantic Code" className="logo__desktop" />
          <img src={LogoM} alt="Logo Quantic Code" className="logo__mobile" />
        </a>
        <button className="header__button" onClick={abreModal}>
          <IconContext.Provider value={{ className: "icons" }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          Contato
        </button>
      </div>
      <div className="modal__container" id="modal" onClick={fechaModal}>
        <div className="modal__card">
          <h2>CONTATO</h2>
          <table>
            <tbody>
              <tr>
                <td rowSpan="2">Endereço</td>
                <td>Rua 20 de Setembro, 394</td>
              </tr>
              <tr>
                <td>Porto Alegre - RS</td>
              </tr>
              <tr>
                <td>E-mail:</td>
                <td>
                  <a href="mailto:contato@quanticcode.com">
                    contato@quanticcode.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>Telefone:</td>
                <td>
                  <a href="tel:+55 51 3085-5524">+55 51 3085-5524</a>
                </td>
              </tr>
            </tbody>
          </table>

          <span>Para sair, clique em qualquer parte da tela.</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
