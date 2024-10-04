import classes from "./contentWide.module.scss";
import {ButtonPic} from "../INSTRUMENTS/buttonLeftRight/buttonLeftRight.tsx";

const ContentWide = () => {
    return (
        <div className={classes.background}>
            <div className={classes.header}>
                Weekly - Top NFT
            </div>
            <div>
                carousel
            </div>
            <div className={classes.button}><ButtonPic/></div>
        </div>
    )
}
export default ContentWide