import classes from "../Mobile.module.scss"
import LogoWhite from "../../IMG/LogoWhite.png"
import Inst from "../../IMG/Inst.png"
import FB from "../../IMG/FB.png"
import LinkedIn from "../../IMG/LinkedIn.png"
import Twitter from "../../IMG/Twitter.png"

const MobileFooter = () => {
    return (<div className={classes.footerMobile}>
            <div className={classes.footerTop}>
                <div className={classes.logoAndName}>
                    <img src={LogoWhite} alt="logo white" className={classes.logoMobile}/>
                    <span>DiveSea</span>
                </div>
                <div className={classes.socials}>
                    <div><img src={Inst} className={classes.socialsItem} alt="logo"/></div>
                    <div><img src={FB} className={classes.socialsItem} alt="logo"/></div>
                    <div><img src={LinkedIn} className={classes.socialsItem} alt="logo"/></div>
                    <div><img src={Twitter} className={classes.socialsItem} alt="logo"/></div>
                </div>
            </div>
            <div className={classes.footerMid}>
                <span>PRIVACY POLICY</span>
                <span>TERM & CONDITIONS</span>
                <span>ABOUT US</span>
                <span>CONTACT</span>
            </div>
            <div className={classes.footerBot}>
                © 2023 DiveSea All Rights Reserved.
            </div>
        </div>
    )
}
export default MobileFooter;