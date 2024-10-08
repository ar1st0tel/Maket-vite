import classes from "../exploreMarketplace.module.scss";
import SunGlass1 from "../../../IMG/SunGlass1.png";


const Card = () => {
    return (
        <div className={classes.item}>
            <img src={SunGlass1} className={classes.img} alt="1"/>
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