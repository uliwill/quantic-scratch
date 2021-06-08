import ScratchCard from "react-scratchcard";
import ScratchImage from "../../img/scratch-to-win450.png";
import "./style.scss";

const settings = {
  width: 450,
  height: 450,
  image: ScratchImage,
  finishPercent: 80,
  //onComplete: () => console.log("The card is now clear!"),
};

function Scratch(props) {
  return (
    <div className="scratch__container">
      <div className="scratch__content">
        <div className="scratchpad">
          {props.id === "5" || props.id === "10" ? (
            <ScratchCard {...settings} key={props.id}>
              <div className="scratch__winner"></div>
            </ScratchCard>
          ) : (
            <ScratchCard {...settings} key={props.id}>
              <div className="scratch__tryagain"></div>
            </ScratchCard>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scratch;
