import classes from "./contentWide.module.scss";
import {ButtonPic} from "../info/preview/pics/buttonLeftRight/buttonLeftRight.tsx";

const ContentWide = () => {
    return (
        <div className={classes.background}>
            <div className={classes.header}>
                Weekly - Top NFT
            </div>
            <div>
                carousel
            </div>
            <ButtonPic/>
        </div>
    )
}
export default ContentWide