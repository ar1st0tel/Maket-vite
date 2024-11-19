import classes from "../exploreMarketplace.module.scss";
import Ethereum from "../../../IMG/Ethereum.png"
const Card = (props: {
    id: string,
    name: string,
    price: string,
    img: string
}) => {
    return (
        <div className={classes.item} key={props.id}>
           <img className={classes.img} src={props.img} alt={props.name} loading="lazy"/>
            <div className={classes.description}>
                <div className={classes.name}>{props.name}
                </div>
                <div className={classes.info}>
                    <div>Current bid</div>
                    <div className={classes.priceLine}><img src={Ethereum} alt="1"/> {props.price}</div>
                </div>
                <div className={classes.bid}>
                    <button className={classes.buttonBid}>PLACE BID</button>
                </div>
            </div>
        </div>
    )
}
export default Card

//props
//map[] parent
//key={idText} div
// div = link (вместо имг)
//
