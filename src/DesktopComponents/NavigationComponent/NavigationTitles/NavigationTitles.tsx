import classes from '../../../App.module.scss';
import {NavLink} from "react-router-dom";

const NavigationTitles = () => {
    return (
            <div className={classes.nav}>
                <div className={classes.boxSmall}>
                        <a href="/discover" className={classes.item}>
                           DISCOVER
                        </a>
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
export default NavigationTitles

