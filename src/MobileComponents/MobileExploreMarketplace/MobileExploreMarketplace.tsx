import ExploreMarketplace from "../../content3/exploreMarketplace/exploreMarketplace.tsx";
import ExploreAll from "../../INSTRUMENTS/exploreAll/ExploreAll.tsx";
import {useEffect, useState} from "react";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../reduxTest/store/Store.ts";
import {fetchCardsAsync} from "../../client/asyncThunk/fetchCardsAsync.ts";

const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards,
        isLoaded: state.CardSlice.isLoaded,
        isError: state.CardSlice.isError,
        isPending: state.CardSlice.isPending
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>
const MobileExploreMarketplace = connector(({cards, isLoaded, isError, isPending, fetchCardsAsync}: Props) => {
    /*const [Data, setData] = useState([])*/
    const [message, setMessage] = useState(false);
    useEffect(() => {
        fetchCardsAsync(4)
    }, [fetchCardsAsync]);


    useEffect(() => {
        let delay: number;
        if (!cards || cards.length === 0) {
            delay = setTimeout(() => {
                setMessage(true);
            }, 1000);
        }
        return () => clearTimeout(delay)

    }, []);

    if (isPending) {
        return <div>...loading...</div>
    }
    if (isError) {
        return <div>ERROR!</div>
    }
    if (!cards || cards.length === 0) {
        return <div>{message ? 'Something is wrong!' : null}</div>
    }
    if (isLoaded) {
        return (<div style={{justifyItems: "center"}}>
                <ExploreMarketplace/>
                <ExploreAll/>
            </div>
        )
    }
})
export default MobileExploreMarketplace