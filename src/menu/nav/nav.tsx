import classes from '../../App.module.css';

const Nav = () => {
    return (<div>
            <div className={classes.box}>
                <div className={classes.item}>
                    Discover
                </div>
                <div className={classes.item}>
                    Creators
                </div>
                <div className={classes.item}>
                    Sells
                </div>
                <div className={classes.item}>
                    Stats
                </div>
            </div>
        </div>
    )
}
export default Nav