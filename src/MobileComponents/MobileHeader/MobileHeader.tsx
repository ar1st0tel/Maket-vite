import LogoBlack from "../../IMG/LogoBlack.png";
import OptionsMobile from "../../IMG/OptionsMobile.png";
import classes from "../Mobile.module.scss";


const MobileHeader = () => {
    return (
        <div className={classes.headerMobile}>
            <div className={classes.leftHeaderMobile}>
                <img src={LogoBlack} alt='1'/> DiveSea
            </div>
            <div className={classes.rightHeaderMobile}>
                <img src={OptionsMobile} alt='1'/>
            </div>
        </div>
    )
}
export default MobileHeader