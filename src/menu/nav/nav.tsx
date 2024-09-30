import classes from '../../App.module.css';

const Nav = () => {
    return (<div>
            <div className={classes.box}>
                <div className={classes.item}>
                    DISCOVER
                </div>
                <div className={classes.item}>
                    CREATORS
                </div>
                <div className={classes.item}>
                    SELLS
                </div>
                <div className={classes.item}>
                    STATS
                </div>
            </div>
        </div>
    )
}
export default Nav