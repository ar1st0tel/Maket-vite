import classes from "./topCollection.module.scss";
import ExploreAll from "../../INSTRUMENTS/exploreAll/ExploreAll.tsx";
import LineTC from "./lineTC/lineTC.tsx";
const TopCollection = () => {
    return (<div className={classes.font}>
        <div className={classes.table}>
            <div className={classes.header}>Top Collection</div>
            <div className={classes.title}>
                <div className={classes.collection}>Collection</div>
                <div>Volume</div>
                <div>24h %</div>
                <div>Floor Price</div>
                <div>Owners</div>
                <div>Items</div>
            </div>
            <div className={classes.line}>
                <LineTC/>
                <LineTC/>
                <LineTC/>
                <LineTC/>
            </div>
        </div>
            <div className={classes.explore}>
                <ExploreAll/>
            </div>

        </div>
    )
}
export default TopCollection
