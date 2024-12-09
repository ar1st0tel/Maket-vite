import Nav from "./nav/nav.tsx";
import classes from "../App.module.scss";
import SearchArea from "./searchArea/searchArea.tsx";
import LogoBlack from "../IMG/LogoBlack.png"
const Menu = () => {
    return (<div className={classes.headerBack}>
        <div className={classes.box}>
            <a href='/'><img src={LogoBlack} alt='1'/></a> {/*img Logo*/}
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