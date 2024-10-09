import classes from "./hero.module.scss";
import {ButtonCreate, ButtonExplore} from "../INSTRUMENTS/buttonHero/buttons.tsx";
import Stats from "../INSTRUMENTS/stats/stats.tsx";
import Rectangle3 from "../IMG/Rectangle3.png";
import Arrow from "../IMG/Arrow.png"
import Dots from "../IMG/Dots.png"
import Rectangle3Small from "../IMG/Rectangle3Small.png"

const Hero = () => {
    return ( <div className={classes.content1Back}>
        <div className={classes.table}>
            <div className={classes.left}>
                <div className={classes.bord}></div>
                <div className={classes.top}>
                    <div className={classes.heroText}>
                        <div className={classes.heroInfo}>Discover And Create NFTs</div>
                        <div className={classes.heroContext}>
                            <div>Discover, Create and Sell NFTs On Our NFT Marketplace</div>
                            <div>With Over Thousands Of NFTs And Get a <strong className={classes.black}>$20 bonus.</strong></div>
                        </div>
                        <div className={classes.buttonGap}><ButtonExplore/><ButtonCreate/></div>
                    </div>
                </div>
                <div className={classes.bottom}><Stats/></div>
            </div>
            <div className={classes.right}>
                <div className={classes.BigPic}>
                    <img src={Rectangle3} alt="1"/>
                </div>
                <div className={classes.smlPics}>
                    <div className={classes.arrow}><img src={Arrow} alt="1"/> </div>
                    <div className={classes.dots}><img src={Dots} alt="1"/></div>
                    <div className={classes.pic}><img src={Rectangle3Small} alt="1"/></div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Hero