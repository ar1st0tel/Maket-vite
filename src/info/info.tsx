import classes from "./info.module.css";
import Preview from "./preview/preview.tsx";
import Stats from "./preview/stats/stats.tsx";

const Info = () => {
    return (
        <div className={classes.infoBox}>
            <div className={`${classes.item} ${classes.item1}`}><Preview/></div>
            <div className={`${classes.item} ${classes.item2}`}><Stats/></div>
            <div className={`${classes.item} ${classes.item3}`}>pics</div>
        </div>
    )
}
export default Info