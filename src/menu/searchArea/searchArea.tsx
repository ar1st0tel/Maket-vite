import classes from '../../App.module.scss';
import Search from "../../IMG/Search.png"

const SearchArea = () => {
    return (<div className={classes.boxSearch}>
            <div className={classes.item}>
                <img src={Search} alt='1'/>
            </div>
            <div className={classes.fontPoppins}> Search Art Work / Creator
            </div>
        </div>
    )
}
export default SearchArea