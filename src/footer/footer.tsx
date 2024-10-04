import classes from "./footer.module.scss"

const Footer = () => {
    return (
        <div className={classes.table}>
            <div className={classes.line1}>
                <div className={classes.item1}>logo</div>
                <div className={classes.item2}>DiveSea</div>
                <div className={classes.item3}>Privacy Policy</div>
                <div className={classes.item4}>Team & Conditions</div>
                <div className={classes.item5}>About Us</div>
                <div className={classes.item6}>Contact</div>
            </div>
            <div className={classes.line2}>
                <div className={classes.item7}>Rights</div>
                <div className={classes.item8}>inst</div>
                <div className={classes.item9}>linked</div>
                <div className={classes.item10}>fb</div>
                <div className={classes.item11}>twitter</div>
            </div>
        </div>
    )
}
export default Footer;