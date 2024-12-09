import classes from "./TopBanner.module.scss";
import {ButtonCreate, ButtonExplore} from "../../INSTRUMENTS/buttonHero/buttons.tsx";
import Stats from "../../INSTRUMENTS/stats/stats.tsx";
import Rectangle3 from "../../IMG/Rectangle3.png";
import Arrow from "../../IMG/Arrow.png"
import Dots from "../../IMG/Dots.png"
import Rectangle3Small from "../../IMG/Rectangle3Small.png"

const TopBannerComponent = () => {
    return (<div className={classes.content1Back}>
            <div className={classes.table}>
                <HeroText/>
                <HeroPictures/>
            </div>
        </div>
    )
}
export default TopBannerComponent

export const HeroPictures = () => {
    return (
        <div className={classes.right}>
            <div className={classes.containerBigPic}>
                <img className={classes.bigPic} src={Rectangle3} alt="1"/>
            </div>
            <div className={classes.smlPics}>
                <div className={classes.row}>
                    <img src={Arrow} className={classes.arrow} alt="1"/>
                    <div className={classes.containerDots}>
                        <img src={Dots} className={classes.dots} alt="1"/>
                    </div>
                </div>
                <div className={classes.containerSmlPic}>
                    <img src={Rectangle3Small} className={classes.pic} alt="1"/>
                </div>
            </div>
        </div>
    )
}

const HeroText = () => {
    return (
        <div className={classes.left}>
            <div className={classes.bord}></div>
            <div className={classes.top}>
                <div className={classes.heroText}>
                    <div className={classes.heroInfo}>Discover And <div> Create NFTs</div></div>
                    <div className={classes.heroContext}>
                        <div>Discover, Create and Sell NFTs On Our NFT Marketplace</div>
                        <div>With Over Thousands Of NFTs And Get a <strong className={classes.black}>$20 bonus.</strong>
                        </div>
                    </div>
                    <div className={classes.buttonGap}><ButtonExplore/><ButtonCreate/></div>
                </div>
            </div>
            <div className={classes.bottom}><Stats/></div>
        </div>
    )
}