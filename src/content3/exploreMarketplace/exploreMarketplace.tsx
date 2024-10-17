import classes from "./exploreMarketplace.module.scss";
import Category from "../../IMG/Category.png"
import Collection from "../../IMG/Collection.png"
import Price from "../../IMG/Price.png"
import Card from "./card/card.tsx";
import card from "./card/card.tsx";
import {CardSlice} from "../../reduxTest/cards/CardSlice.ts";
import {useAppSelector} from "../../reduxTest/store/Store.ts";

const ExploreMarketplace = () => {
    return (<div>
            <div className={classes.table}>
                <div className={classes.text}>Explore Marketplace</div>
                <div className={`${classes.filt} ${classes.buttonBorder}`}>
                    <button>All</button>
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
                <CardCase/>
            </div>
        </div>
    )
}
export {ExploreMarketplace1};

const CardCase = () => {
    useAppSelector((state) => state.CardSlice.cards)
    return (
        <div className={classes.line}>
            {CardSlice[].map(CardSlice=>(
                <CardSlice
                key={CardSlice.id}
                id={CardSlice.id}
                name={CardSlice.name}
                price={CardSlice.price}
                img={CardSlice.img}/>
            ))}
            {/*<Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>*/}
        </div>
    )
}
export {CardCase};