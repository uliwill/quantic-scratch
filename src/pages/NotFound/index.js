import "./style.scss";
import Travolta from "../../img/travolta.gif";

function NotFound() {
  return (
    <div className="notfound__container">
      <h2>A página que você solicitou não existe!</h2>
      <img src={Travolta} alt="Perdido?" />
    </div>
  );
}

export default NotFound;
