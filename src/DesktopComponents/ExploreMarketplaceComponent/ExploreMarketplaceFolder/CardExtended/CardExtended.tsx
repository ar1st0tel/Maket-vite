import classes from ".././CardExtended/CardExtended.module.scss";
import EthereumBig from "../../../../Pictures/EthereumBig.png"
import BidPicture from "../../../../Pictures/BidPicture.png"

const CardExtended = (props: {
    id: string,
    name: string,
    price: string,
    img: string,
    description: string,
    author: string,
    authorPic: string,
    owner: string,
    ownerPic: string,
    timeOfEnd: string
}) => {
    return (
        <div className={classes.card} key={props.id}>
            <div className={classes.picContainer}>
                <img className={classes.img} src={props.img} alt={props.name} loading="lazy"/>
            </div>
            <div className={classes.nameAndDescription}>
                <div className={classes.cardName}>
                    <div className={classes.titleName}>
                        Project {props.name}
                    </div>
                    <div className={classes.description}>
                        {props.description}
                    </div>
                </div>
                <div className={classes.authorAndOwner}>
                    <div className={classes.author}>
                        <div className={classes.authorImgContainer}>
                            <img src={props.authorPic} alt={props.author}/>
                        </div>
                        <span>
                            <div className={classes.greyText}>
                                Created by
                            </div>
                            <div className={classes.blackText}>
                                {props.author}
                            </div>
                        </span>
                    </div>
                    <div className={classes.author}>
                        <div className={classes.authorImgContainer}>
                            <img src={props.ownerPic} alt={props.owner}/>
                        </div>
                        <span>
                            <div className={classes.greyText}>
                                Owned by
                            </div>
                            <div className={classes.blackText}>
                                {props.owner}
                            </div>
                        </span>
                    </div>
                </div>
                <div className={classes.lineInfo}>
                    <div className={classes.info}>
                        <div className={classes.greyText}>Current bid</div>
                        <div>
                            <div className={classes.blackTextBold}>
                                <img src={EthereumBig} alt="1" className={classes.ethereumImg}/>{props.price}
                            </div>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.greyTextEnd}>End in</div>
                        <div>
                            <div className={classes.blackTextLight}>
                                {props.timeOfEnd}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.bid}>
                    <button className={classes.buttonBid}><img src={BidPicture} alt="1" /> Place Bid</button>
                </div>
            </div>
        </div>
    )
}
export default CardExtended;


