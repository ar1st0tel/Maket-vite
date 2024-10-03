import classes from "./topCollection.module.scss";

const TopCollection = () => {
    return (<div>
        <div className={classes.table}>
            <div className={classes.header}>header</div>
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
            <div>
                <div className={classes.explore}>Explore All <img src="http://nordclan.com/uploads/46970e9cd94e4efa89ae9410b424208f.png" alt="1"/></div>
            </div>
        </div>
    )
}
export default TopCollection