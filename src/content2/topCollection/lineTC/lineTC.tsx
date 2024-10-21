import classes from "./lineTC.module.scss"
import Ethereum from "../../../IMG/Ethereum.png"

const LineTC = (props: {
    "id": number,
    "pic": string,
    "name": string,
    "author": string,
    "volume": number,
    "dayPercent": string,
    "floorPrice": number,
    "owners": number,
    "items": number
}) =>{
    return (
        <div className={classes.line} key={props.id}>
            <div className={classes.name}>
                <img className={classes.pic} alt={props.name} loading="lazy"/>
                <div className={classes.nameCard}>
                    {props.name}
            </div>
                <div className={classes.author}>
                    By {props.author}
                </div>
            </div>
            <div className={classes.value}>
                <img src={Ethereum} alt='1'/> {props.volume}
            </div>
            <div className={classes.value}>
                {props.dayPercent}
            </div>
            <div className={classes.value}>
                <img src={Ethereum} alt='1'/> {props.floorPrice}
            </div>
            <div className={classes.value}>
                {props.owners}
            </div>
            <div className={classes.value}> {props.items}
            </div>
        </div>
    )
}
export default LineTC