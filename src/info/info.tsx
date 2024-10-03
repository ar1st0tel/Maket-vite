import classes from "./info.module.scss";
import Preview from "./preview/preview.tsx";
import Stats from "./preview/stats/stats.tsx";
import Pic1, {Pic2, Pic3, Pic4} from "./preview/pics/pics.tsx";
import {ButtonPic} from "./preview/pics/buttonLeftRight/buttonLeftRight.tsx";

const Info = () => {
    return (
        <div className={classes.infoBox}>
            <div className={`${classes.item} ${classes.item1}`}><Preview/></div>
            <div className={`${classes.item} ${classes.item2}`}><Stats/></div>
            <div className={`${classes.item} ${classes.item3}`}><Pic1/>
                <Pic2/>
                <Pic3/>
                <Pic4/>
                <div className={classes.buttonCommon}><ButtonPic/></div>
            </div>
        </div>
    );
}
export default Info