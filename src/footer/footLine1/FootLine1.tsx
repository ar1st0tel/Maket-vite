import classes from "../footer.module.scss";

const FootLine1 = () => {
    return (<div>
            <div className={classes.box}>
                <div>
                    <a className={classes.a} href="#S">Privacy Policy</a>
                </div>
                <div>
                    <a className={classes.a} href="#S">Team & Conditions</a>
                </div>
                <div>
                    <a className={classes.a} href="#S">About Us</a>
                </div>
                <div>
                    <a className={classes.a} href="#S">Contact</a>
                </div>
            </div>
        </div>
    )
}
export default FootLine1