import classes from "./NavigationComponent.module.scss";
import LogoBlack from "@/Pictures/LogoBlack.png";
import NavigationTitles from "@/DesktopComponents/NavigationComponent/NavigationTitles/NavigationTitles.tsx";
import SearchArea from "@/DesktopComponents/NavigationComponent/SearchArea/SearchArea.tsx";
import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <div className={classes.headerBack}>
      <div className={classes.box}>
        <NavLink to="/">
          <img src={LogoBlack} alt="1" />
        </NavLink>{" "}
        {/*img Logo*/}
        <NavigationTitles />
        <SearchArea />
        <button className={classes.boxWallet}>CONNECT WALLET</button>
      </div>
    </div>
  );
};
export default NavigationComponent;
