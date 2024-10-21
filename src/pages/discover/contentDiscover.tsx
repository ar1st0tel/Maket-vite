import classes from "../../App.module.scss";

import Loading from "../../IMG/Loading.png";
import ExploreMarketplace from "../../content3/exploreMarketplace/exploreMarketplace.tsx";

const ContentDiscover = () => {
    return (<div className={classes.contentBack}>
            <ExploreMarketplace/>
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