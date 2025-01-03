import classes from "./Card.module.scss";
import Ethereum from "@/pictures/Ethereum.png";
import { CardSlice } from "@/ReduxFeatures/CardSlice/CardSlice.ts";
import { useNavigate } from "react-router-dom";

interface CardProps {
  card: CardSlice;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const navigate = useNavigate();
  const handleCardClick = (id: string) => {
    navigate(`/card/${id}`);
  };
  return (
    <div
      className={classes.item}
      key={card.id}
      onClick={() => handleCardClick(card.id)}
    >
      <div className={classes.cardContainer}>
        <img
          className={classes.img}
          src={card.img}
          alt={card.name}
          loading="lazy"
        />
      </div>
      <div className={classes.description}>
        <div className={classes.name}>{card.name}</div>
        <div className={classes.lineInfo}>
          <div className={classes.info}>
            <span>Current bid</span>
            <div className={classes.priceLine}>
              <img src={Ethereum} alt="1" /> {card.price}
            </div>
          </div>
          <div className={classes.bid}>
            <button className={classes.buttonBid}>PLACE BID</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
