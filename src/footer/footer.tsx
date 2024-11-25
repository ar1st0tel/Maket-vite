import classes from "./footer.module.scss"
import FootLine1 from "./footLine1/FootLine1.tsx";
import FootLine2 from "./footLine2/FootLine2.tsx";
import LogoWhite from "../IMG/LogoWhite.png"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (<div className={classes.appWrapper}>
        <div className={classes.table}>
            <div className={classes.line1}>
                <NavLink className={classes.a} to="#S">
                    <div className={classes.whiteLogo}><img
                        src={LogoWhite} alt="1"/> DiveSea
                    </div>
                </NavLink>
                    <FootLine1/>
            </div>
            <div className={classes.line2}>
                <div className={classes.rights}>
                    © 2023 EATLY All Rights Reserved.
                </div>
              <FootLine2/>
            </div>
        </div>
        </div>
    )
}
export default Footer;