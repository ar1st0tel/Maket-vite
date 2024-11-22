import classes from "./exploreMarketplace.module.scss";
import Category from "../../IMG/Category.png"
import Collection from "../../IMG/Collection.png"
import Price from "../../IMG/Price.png"
import {CardCase} from "./CardCase/CardCase.tsx";
import {useLocation} from "react-router-dom";

const ExploreMarketplace = () => {
    const location = useLocation();
    const hideButton:boolean = location.pathname === "/discover" || location.pathname === "/mobile";
    return (
            <div className={classes.table}>
                <div className={classes.text}>Explore Marketplace</div>
                <div className={`${classes.filters} ${classes.buttonBorder}`}>
                    {!hideButton && (<button className={classes.buttonBorder}>All</button>)}
                    <button className={classes.buttonBorder}>
                        <div className={classes.buttonAlign}>
                            <img src={Category} alt="1"/>Category
                        </div>
                    </button>
                    <button className={classes.buttonBorder}>
                        <div className={classes.buttonAlign}><img src={Collection} alt="1"/>Collection</div>
                    </button>
                    <button className={classes.buttonBorder}>
                        <div className={classes.buttonAlign}><img src={Price} alt="1"/>Price</div>
                    </button>
                </div>
                <CardCase/>
        </div>
    )
}
export default ExploreMarketplace



