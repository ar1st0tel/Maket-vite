import classes from "../../App.module.scss";

import Loading from "../../IMG/Loading.png";
import {ExploreMarketplace1} from "../../content3/exploreMarketplace/exploreMarketplace.tsx";

const ContentDiscover = () => {
    return (<div className={classes.contentBack}>
            <ExploreMarketplace1/>
</div>
)
}

export default ContentDiscover;


const LoadingImg = () => {
    return (
        <div className={classes.loading}>
            <img className={classes.rotate} src={Loading} alt="1"/>
        </div>
    )
}
export { LoadingImg }