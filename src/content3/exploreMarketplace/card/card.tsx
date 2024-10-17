import classes from "../exploreMarketplace.module.scss";


const Card = (props: {
    id: string,
    name: string,
    price: string,
    img: string
}) => {
    return (
        <div className={classes.item} key={props.id}>
            <a href="#s" className={classes.img} ><img src={props.img} alt={props.name}/></a>
            <div className={classes.description}>
                <div className={classes.name}>{props.name}
                </div>
                <div className={classes.info}>
                    <div>Current bid</div>
                    <div>'img' {props.price}</div>
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
