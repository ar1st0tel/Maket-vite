import ExploreMarketplace from "./exploreMarketplace/exploreMarketplace.tsx";
import classes from "../App.module.scss";
import ExploreAll from "../INSTRUMENTS/exploreAll/ExploreAll.tsx";


const Content3 = () => {
    return (<div className={classes.contentBack}>
           <ExploreMarketplace/>
            <ExploreAll/>
        </div>
    )
}
export default Content3