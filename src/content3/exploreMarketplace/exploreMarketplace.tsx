import classes from "./exploreMarketplace.module.scss";
import Category from "../../IMG/Category.png"
import Collection from "../../IMG/Collection.png"
import Price from "../../IMG/Price.png"
import Card from "./card/card.tsx";

const ExploreMarketplace = () => {
    return (<div>
            <div className={classes.table}>
                <div className={classes.text}>Explore Marketplace</div>
                <div className={classes.filt}>
                    <button className={classes.buttonBorder}>All</button>
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
                <CardLine/>
                <CardLine/>
            </div>
        </div>
    )
}
export default ExploreMarketplace

const ExploreMarketplace1 = () => {
    return (<div>
            <div className={classes.table}>
                <div className={classes.text}>Explore Marketplace</div>
                <div className={classes.filt}>
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
                <CardLine/>
                <CardLine/>
                <CardLine/>
            </div>
        </div>
    )
}
export {ExploreMarketplace1};

const CardLine = () => {
    return (
        <div className={classes.line}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export {CardLine};