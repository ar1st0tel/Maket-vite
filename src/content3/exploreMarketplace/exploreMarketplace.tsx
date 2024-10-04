import classes from "./exploreMarketplace.module.scss";
import ExploreAll from "../../INSTRUMENTS/exploreAll/ExploreAll.tsx";

const ExploreMarketplace = () =>{
    return (<div>
        <div className={classes.table}>
            <div className={classes.text}>Text</div>
            <div className={classes.filt}>
                All Category Collections Price
            </div>
            <div className={classes.line1}>
                <div className={classes.item}>img1</div>
                <div className={classes.item}>img2</div>
                <div className={classes.item}>img3</div>
                <div className={classes.item}>img4</div>
            </div>
            <div className={classes.line2}>
                <div className={classes.item}>img5</div>
                <div className={classes.item}>img6</div>
                <div className={classes.item}>img7</div>
                <div className={classes.item}>img8</div>
            </div>
        </div>
            <div className={classes.explore}>
                <ExploreAll/>
            </div>
        </div>
    )
}
export default ExploreMarketplace