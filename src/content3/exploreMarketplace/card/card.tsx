import classes from "../exploreMarketplace.module.scss";
import SunGlass1 from "../../../IMG/SunGlass1.png";
import {NavLink} from "react-router-dom";


const Card = () => {
    return (
        <div className={classes.item}>
            <NavLink to="#s" className={classes.img} ><img src={SunGlass1} alt="1"/></NavLink>
            <div className={classes.description}>
                <div className={classes.name}>Sun-Glass
                </div>
                <div className={classes.info}>
                    <div>Current bid</div>
                    <div>'img' price</div>
                </div>
                <div className={classes.bid}>
                    <button className={classes.buttonBid}>PLACE BID</button>
                </div>
            </div>
        </div>
    )
}
export default Card