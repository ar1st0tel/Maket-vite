import classes from "../Mobile.module.scss";
import Line from '../../IMG/Line.png'
import TrustPilot from "../../IMG/TrustPilot.png"
import TrustPilotName from "../../IMG/TrustPilotName.png"
import Stars from '../../IMG/Stars.png'
import {ButtonCreate, ButtonExplore} from "../../INSTRUMENTS/buttonHero/buttons.tsx";
import {HeroPictures} from "../../Hero/hero.tsx";

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
                <div className={classes.mainText}>
                    <p>Discover, Create and Sell NFTs On Our NFT Marketplace</p>
                    <p> With Over Thousands Of NFTs And Get a <span className={classes.blackText}>$20 bonus.</span></p>
                </div>
            </div>
            <div className={classes.buttonsLine}>
                <ButtonExplore/>
                <ButtonCreate/>
            </div>
            <div className={classes.trustPilot}>
                <div style={{display: "flex"}}>
                    <img src={TrustPilot} alt="Green star"/>
                    <img src={TrustPilotName} style={{alignSelf: "end"}} alt="trustpilot"/>
                </div>
                <div style={{display: "flex", alignItems: "center", gap:7}}>
                    <img src={Stars} alt="stars"/>
                    <span>4900+</span>
                </div>
            </div>
            <HeroPictures />
        </div>
    )
}
export default MobileHero