import classes from '../../App.module.scss';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
            <div className={classes.nav}>
                <div className={classes.boxSmall}>
                        <NavLink to="/discover" className={classes.item}>
                           <Discover />
                        </NavLink>
                        <NavLink to="/creators" className={classes.item}>
                            CREATORS
                        </NavLink>
                        <NavLink to="/sells" className={classes.item}>
                            SELLS
                        </NavLink>
                        <NavLink to="/stats" className={classes.item}>
                            STATS
                        </NavLink>
                </div>
            </div>
    )
}
export default Nav

const Discover = () => {
    return (
        <div className={classes.a}>
            DISCOVER
        </div>
    )
}
export  {Discover};