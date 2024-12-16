import NavigationComponent from "@/DesktopComponents/NavigationComponent/NavigationComponent.tsx";
import classes from "./TEST.module.scss";
import { NavLink } from "react-router-dom";
import Inst from "@/Pictures/Inst.png";
import LinkedIn from "@/Pictures/LinkedIn.png";
import FB from "@/Pictures/FB.png";
import Twitter from "@/Pictures/Twitter.png";
import LogoWhite from "@/Pictures/LogoWhite.png";

function PAGE_TEST_ANOTHER_PROJECT() {
  return (
    <>
      <NavigationComponent />
      <FooterComponent />
    </>
  );
}

export default PAGE_TEST_ANOTHER_PROJECT;

const FootLineBottom = () => {
  return (
    <>
      <div className={classes.box1}>
        <NavLink to="#S">
          <img src={Inst} alt="1" />
        </NavLink>
        <NavLink to="#S">
          <img src={LinkedIn} alt="1" />
        </NavLink>
        <NavLink to="#S">
          <img src={FB} alt="1" />
        </NavLink>
        <NavLink to="#S">
          <img src={Twitter} alt="1" />
        </NavLink>
      </div>
    </>
  );
};

const FootLineTop = () => {
  return (
    <>
      <div className={classes.box}>
        <NavLink className={classes.link} to="#S">
          Privacy Policy
        </NavLink>
        <NavLink className={classes.link} to="#S">
          Team & Conditions
        </NavLink>
        <NavLink className={classes.link} to="#S">
          About Us
        </NavLink>
        <NavLink className={classes.link} to="#S">
          Contact
        </NavLink>
      </div>
    </>
  );
};

const FooterComponent = () => {
  return (
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
        <div className={classes.rights}>© 2023 EATLY All Rights Reserved.</div>
        <FootLineBottom />
      </div>
    </div>
  );
};
