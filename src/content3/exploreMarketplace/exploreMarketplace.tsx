import classes from "./exploreMarketplace.module.scss";
import Category from "../../IMG/Category.png"
import Collection from "../../IMG/Collection.png"
import Price from "../../IMG/Price.png"
import {CardCase} from "./CardCase/CardCase.tsx";
import {useLocation} from "react-router-dom";
import React, {useEffect} from "react";

const ExploreMarketplace = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 375);
    useEffect(() => {
        const handleSizeChange = () => {
            setIsMobile(window.innerWidth <= 375);
        };
        window.addEventListener("resize", handleSizeChange);
        return () => {
            window.removeEventListener("resize", handleSizeChange);
        }
    }, []);
    const location = useLocation();
    const hideButton: boolean = location.pathname === "/discover" || isMobile;
    const topicNFT: boolean = location.pathname === "/discover"
    return (
        <div className={classes.table}>
            <div className={classes.text}>{!topicNFT ? "Explore Marketplace" : "Discover NFTs"}</div>
            <div className={`${classes.filters} ${classes.buttonBorder}`}>
                {!hideButton && (<button className={classes.buttonBorder}>All</button>)}
                <button className={classes.buttonBorder}>
                    <div className={classes.buttonAlign}>
                        <img src={Category} className={classes.imgMobile} alt="1"/>Category
                    </div>
                </button>
                <button className={classes.buttonBorder}>
                    <div className={classes.buttonAlign}>
                        <img src={Collection} className={classes.imgMobile} alt="1"/>Collection
                    </div>
                </button>
                <button className={classes.buttonBorder}>
                    <div className={classes.buttonAlign}>
                        <img src={Price} className={classes.imgMobile} alt="1"/>Price
                    </div>
                </button>
            </div>
            <CardCase/>
        </div>
    )
}
export default ExploreMarketplace



