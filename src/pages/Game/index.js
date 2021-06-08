import { useParams } from "react-router-dom";
import Scratch from "../../components/Scratch";

function Game() {
  const { id } = useParams();
  return (
    <>
      <Scratch id={id} />
    </>
  );
}

export default Game;
