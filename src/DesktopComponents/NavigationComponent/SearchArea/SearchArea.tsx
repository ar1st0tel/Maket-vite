import classes from '../../../App.module.scss';
import Search from "../../../IMG/Search.png"

const SearchArea = () => {
    return (<div className={classes.boxSearch}>

                <img className={classes.item} src={Search} alt='1'/>

            <input className={classes.searchArea} placeholder="Search Art Work / Creator"/>
        </div>
    )
}
export default SearchArea