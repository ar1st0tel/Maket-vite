import react from "@vitejs/plugin-react";
import Nav from "./nav/nav.tsx";
import classes from "../App.module.css";
import SearchArea from "./searchArea/searchArea.tsx";
const Menu = () => {
    return (
        <div className={classes.box}>
           <img src='http://nordclan.com/uploads/7fd92b823a724f539f05e0feb0dd2ac7.png' alt='1'/> {/*logo*/}
       <Nav/>
        <SearchArea/>
        <button className={classes.item}>
            Wallet
            </button>
        </div>
        )
}
export default Menu