import classes from "./topCollection.module.scss";
import ExploreAll from "../../INSTRUMENTS/exploreAll/ExploreAll.tsx";
import LineTC from "./lineTC/lineTC.tsx";
import {connect, ConnectedProps} from "react-redux";
import {fetchLinesAsync} from "../../client/asyncThunk/fetchLinesAsync.ts";
import {RootState} from "../../reduxTest/store/Store.ts";
import TableTitle from "./TableTitle/TableTitle.tsx";
import {LineSlice} from "../../reduxTest/linesCollections/LineSlice.ts";
import {useEffect} from "react";

const connector = connect(
    (state: RootState) => ({
        LineArray: state.LineSlice.lines,
        isError: state.LineSlice.isError,
        isPending: state.LineSlice.isPending,
        isLoaded: state.LineSlice.isLoaded
    }), {fetchLinesAsync}
);
type CollectionProps = ConnectedProps<typeof connector>
const TopCollection = connector(({LineArray, isError, isPending, isLoaded, fetchLinesAsync}: CollectionProps) => {

    useEffect(() => {
        fetchLinesAsync(4)
    }, [fetchLinesAsync]);

    if (isPending) {
        return <div>...loading...</div>;
    }
    if (isError) {
        return <div>ERROR!</div>;
    }
    if (!LineArray.length) {
        return <div>There are no collections unfortunately</div>;
    }
    if (isLoaded) {
        return (<>
                <div className={classes.table}>
                    <TableTitle/>
                    <div className={classes.line}>
                        {LineArray.map((lineItem: LineSlice) => (
                                <LineTC
                                    key={lineItem.id}
                                    id={lineItem.id}
                                    pic={lineItem.pic}
                                    name={lineItem.name}
                                    author={lineItem.author}
                                    volume={lineItem.volume}
                                    dayPercent={lineItem.dayPercent}
                                    floorPrice={lineItem.floorPrice}
                                    owners={lineItem.owners}
                                    items={lineItem.items}
                                />
                            )
                        )}
                    </div>
                </div>
                <div className={classes.explore}>
                    <ExploreAll/>
                </div>

            </>
        )
    }
    return null
})

export default TopCollection

