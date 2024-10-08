import classes from "../footer.module.scss";
import Inst from "../../IMG/Inst.png";
import FB from "../../IMG/FB.png";
import LinkedIn from "../../IMG/LinkedIn.png";
import Twitter from "../../IMG/Twitter.png";

const FootLine2 = () => {
    return (<div className={classes.logos}>
            <div className={classes.box1}>
                <div>
                    <a href="#S"><img src={Inst} alt="1"/></a>
                </div>
                <div>
                    <a href="#S"><img src={LinkedIn} alt="1"/></a>
                </div>
                <div>
                    <a href="#S"><img src={FB} alt="1"/></a>
                </div>
                <div>
                    <a href="#S"><img src={Twitter} alt="1"/></a>
                </div>
            </div>
        </div>
    )
}
export default FootLine2