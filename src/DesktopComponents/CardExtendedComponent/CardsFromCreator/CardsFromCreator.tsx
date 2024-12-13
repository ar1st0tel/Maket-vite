import classes from "./CardsFromCreator.module.scss";
import Ethereum from "@/Pictures/Ethereum.png";
import Verification from "@/Pictures/Verification.png";
import Heart from "@/Pictures/Heart.png";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";

interface CardsFromCreatorProps {
  card: CardSlice;
}

const CardsFromCreator: React.FC<CardsFromCreatorProps> = ({ card }) => {
  return (
    <div className={classes.item} key={card.id}>
      <div className={classes.cardContainer}>
        <img
          className={classes.img}
          src={card.img}
          alt={card.name}
          loading="lazy"
        />
      </div>
      <div className={classes.description}>
        <div className={classes.name}>
          {card.author} <img src={Verification} alt="✔" />
        </div>
        <div className={classes.lineInfo}>
          <div className={classes.info}>
            {card.name}
            <div className={classes.priceLine}>
              <img src={Ethereum} alt="1" /> {card.price}
            </div>
          </div>
          <div className={classes.likes}>
            <img src={Heart} alt="2" />
            {card.likes}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardsFromCreator;
