import Nav from "./nav/nav.tsx";
import classes from "../App.module.scss";
import SearchArea from "./searchArea/searchArea.tsx";
import LogoBlack from "../IMG/LogoBlack.png"
import {NavLink} from "react-router-dom";
const Menu = () => {
    return (<div className={classes.headerBack}>
        <div className={classes.box}>
            <NavLink to="http://localhost:5173/"><img src={LogoBlack} alt='1'/></NavLink>  {/*img Logo*/}
            <Nav/>
            <SearchArea/>
        <button className={classes.boxWallet}>
            CONNECT WALLET
            </button>
        </div>
        </div>
        )
}
export default Menu