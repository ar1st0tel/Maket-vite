import classes from "../Mobile.module.scss";
import Line from '../../IMG/Line.png'
import {ButtonCreate, ButtonExplore} from "../../INSTRUMENTS/buttonHero/buttons.tsx";
const MobileHero = () => {
    return (
        <div className={classes.heroMobile}>
            <div className={classes.topic}>
                <img src={Line} alt='1'/>OVER 1M CREATORS
            </div>
            <div className={classes.text}>
                <div className={classes.mainInfo}>
                    Discover And Create NFTs
                </div>
                <div>
                    Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.
                </div>
            </div>
            <div className={classes.buttonsLine}>
                <ButtonExplore/>
                <ButtonCreate/>
            </div>
            <div>
                trustpilot
            </div>
            <div>
                pictures
            </div>
        </div>
    )
}
export default MobileHero