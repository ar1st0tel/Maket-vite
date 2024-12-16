import classes from "./TEST.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoBlack from "@/Pictures/LogoBlack.png";
import Search from "@/Pictures/Search.png";
import OptionsMobile from "@/Pictures/OptionsMobile.png";

function PAGE_TEST_ANOTHER_PROJECT() {
  return (
    <>
      <NavigationComponent />
    </>
  );
}

export default PAGE_TEST_ANOTHER_PROJECT;

const NavigationTitles = () => {
  const [selectedItem, setSelectedItem] = useState<string>(() => {
    return localStorage.getItem("selectedItem") || "";
  });
  const changeColor = (item: string) => {
    setSelectedItem(item);
    localStorage.setItem("selectedItem", item);
  };
  return (
    <div className={classes.nav}>
      <div className={classes.boxSmall}>
        <NavLink
          to="/discover"
          className={
            selectedItem === "DISCOVER" ? classes.itemBlack : classes.itemGray
          }
          onClick={() => changeColor("DISCOVER")}
        >
          DISCOVER
        </NavLink>
        <NavLink
          to="/creators"
          className={
            selectedItem === "CREATORS" ? classes.itemBlack : classes.itemGray
          }
          onClick={() => changeColor("CREATORS")}
        >
          CREATORS
        </NavLink>
        <NavLink
          to="/sells"
          className={
            selectedItem === "SELLS" ? classes.itemBlack : classes.itemGray
          }
          onClick={() => changeColor("SELLS")}
        >
          SELLS
        </NavLink>
        <NavLink
          to="/stats"
          className={
            selectedItem === "STATS" ? classes.itemBlack : classes.itemGray
          }
          onClick={() => changeColor("STATS")}
        >
          STATS
        </NavLink>
      </div>
    </div>
  );
};
const NavigationComponent = () => {
  return (
    <div className={classes.headerBack}>
      <div className={classes.box}>
        <NavLink to="/">
          <div className={classes.logoMobile}>
            <img className={classes.imgMobile} src={LogoBlack} alt="1" />
            <span className={classes.name}>DiveSea</span>
          </div>
        </NavLink>
        <NavigationTitles />
        <SearchArea />
        <button className={classes.boxWallet}>CONNECT WALLET</button>
        <img className={classes.optionMobile} src={OptionsMobile} alt="1" />
      </div>
    </div>
  );
};

const SearchArea = () => {
  return (
    <div className={classes.boxSearch}>
      <img className={classes.item} src={Search} alt="1" />

      <input
        className={classes.searchArea}
        placeholder="Search Art Work / Creator"
      />
    </div>
  );
};
