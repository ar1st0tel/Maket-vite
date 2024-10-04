import classes from "./hero.module.scss";
import {ButtonCreate, ButtonExplore} from "../INSTRUMENTS/buttonHero/buttons.tsx";
import Stats from "../INSTRUMENTS/stats/stats.tsx";


const Hero = () => {
    return (
        <div className={classes.table}>
            <div className={classes.left}>
                <div className={classes.bord}></div>
                <div className={classes.top}>
                    <div className={classes.heroText}>
                        <div className={classes.heroInfo}>Discover And Create NFTs</div>
                        <div className={classes.heroContext}>
                            <div>Discover, Create and Sell NFTs On Our NFT Marketplace</div>
                            <div>With Over Thousands Of NFTs And Get a <strong>$20 bonus.</strong></div>
                        </div>
                        <div className={classes.heroButton}>
                            <ButtonExplore/>
                            <ButtonCreate/>
                        </div>
                    </div>
                </div>
                <div className={classes.bottom}><Stats/></div>
            </div>
            <div className={classes.right}>tab2</div>
        </div>
    )
}
export default Hero