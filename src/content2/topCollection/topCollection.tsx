import classes from "./topCollection.module.scss";
import ExploreAll from "../../INSTRUMENTS/exploreAll/ExploreAll.tsx";

const TopCollection = () => {
    return (<div>
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
            <div className={classes.name}>
                <div>Alex Ca.</div>
                <div>Alex Ca.</div>
                <div>Alex Ca.</div>
                <div>Alex Ca.</div>
            </div>
            <div className={classes.volume}>
                <div>volume</div>
                <div>Volume</div>
                <div>Volume</div>
                <div>Volume</div>
            </div>
            <div className={classes.h24}>
                <div>volume</div>
                <div>Volume</div>
                <div>Volume</div>
                <div>Volume</div>
            </div>
            <div className={classes.floor}>
                <div>volume</div>
                <div>Volume</div>
                <div>Volume</div>
                <div>Volume</div>
            </div>
            <div className={classes.owners}>
                <div>volume</div>
                <div>Volume</div>
                <div>Volume</div>
                <div>Volume</div>
            </div>
            <div className={classes.items}>
                <div>volume</div>
                <div>Volume</div>
                <div>Volume</div>
                <div>Volume</div>
            </div>
        </div>
            <div className={classes.explore}>
                <ExploreAll/>
            </div>

        </div>
    )
}
export default TopCollection
