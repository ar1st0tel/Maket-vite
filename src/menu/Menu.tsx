import Nav from "./nav/nav.tsx";
import classes from "../App.module.scss";
import SearchArea from "./searchArea/searchArea.tsx";
import LogoBlack from "../IMG/LogoBlack.png"
const Menu = () => {
    return (
        <div className={classes.box}>
            <img src={LogoBlack} alt='1'/> {/*img Logo*/}
            <Nav/>
            <SearchArea/>
        <button className={classes.boxWallet}>
            CONNECT WALLET
            </button>
        </div>
        )
}
export default Menu