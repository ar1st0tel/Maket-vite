import classes from "./contentWide.module.scss";

const ContentWide = () => {
    return (
        <div className={classes.background}>
            <div className={classes.header}>
                Weekly - Top NFT
            </div>
            <div>
                carousel
            </div>
            <div className={classes.buttonCommon}>
                <button>L</button>
                <button>R</button>
            </div>
        </div>
    )
}
export default ContentWide