import classes from "./FooterComponent.module.scss";
import LogoWhite from "@/Pictures/LogoWhite.png";
import { NavLink } from "react-router-dom";
import FootLineTop from "@/DesktopComponents/FooterComponent/FootLineTop/FootLineTop.tsx";
import FootLineBottom from "@/DesktopComponents/FooterComponent/FootLineBottom/FootLineBottom.tsx";

const FooterComponent = () => {
  return (
    <div className={classes.appWrapper}>
      <div className={classes.table}>
        <div className={classes.line1}>
          <NavLink className={classes.link} to="#S">
            <div className={classes.whiteLogo}>
              <img src={LogoWhite} alt="1" /> DiveSea
            </div>
          </NavLink>
          <FootLineTop />
        </div>
        <div className={classes.line2}>
          <div className={classes.rights}>
            © 2023 EATLY All Rights Reserved.
          </div>
          <FootLineBottom />
        </div>
      </div>
    </div>
  );
};
export default FooterComponent;
