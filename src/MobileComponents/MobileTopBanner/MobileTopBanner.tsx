import classes from "./MobileTopBanner.module.scss";
import Line from "../../Pictures/Line.png";
import TrustPilot from "../../Pictures/TrustPilot.png";
import TrustPilotName from "../../Pictures/TrustPilotName.png";
import Stars from "../../Pictures/Stars.png";
import ButtonExplore from "@/HelpersComponents/ExploreAndCreateButtonsTopBanner/ButtonExplore.tsx";
import ButtonCreate from "@/HelpersComponents/ExploreAndCreateButtonsTopBanner/ButtonCreate.tsx";

const MobileTopBanner = () => {
  return (
    <div className={classes.heroMobile}>
      <div className={classes.topic}>
        <img src={Line} alt="1" />
        OVER 1M CREATORS
      </div>
      <div className={classes.text}>
        <div className={classes.mainInfo}>Discover And Create NFTs</div>
        <div className={classes.mainText}>
          <p>Discover, Create and Sell NFTs On Our NFT Marketplace</p>
          <p>
            {" "}
            With Over Thousands Of NFTs And Get a{" "}
            <span className={classes.blackText}>$20 bonus.</span>
          </p>
        </div>
      </div>
      <div className={classes.buttonsLine}>
        <ButtonExplore />
        <ButtonCreate />
      </div>
      <div className={classes.trustPilot}>
        <div className={classes.position}>
          <img src={TrustPilot} alt="Green star" />
          <img
            src={TrustPilotName}
            className={classes.imgPosition}
            alt="trustpilot"
          />
        </div>
        <div className={classes.stars}>
          <img src={Stars} alt="stars" />
          <span>4900+</span>
        </div>
      </div>
    </div>
  );
};
export default MobileTopBanner;
