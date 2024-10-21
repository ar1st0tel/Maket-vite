import Menu from "../../menu/Menu.tsx";
import Footer from "../../footer/footer.tsx";
import ContentDiscover, {LoadingImg} from "./contentDiscover.tsx";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../reduxTest/store/Store.ts";
import {fetchCardsAsync} from "../../client/products/asyncThunk/fetchCardsAsync.ts";
import {useEffect} from "react";


const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards,
        isLoaded: state.CardSlice.isLoaded,
        isError: state.CardSlice.isError,
        isPending: state.CardSlice.isPending
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>

const PageDiscover = connector(({cards, isLoaded, isError, isPending, fetchCardsAsync}: Props) => {
    useEffect(() => {
        fetchCardsAsync()
    }, [fetchCardsAsync]);


    if (isPending) {
        return <div>...loading...</div>
    }
    if (isError) {
        return <div>ERROR!</div>
    }
    if (!cards || cards.length === 0) {
        return <div>Something is wrong!</div>
    }
    if (isLoaded) {
        return (<div>
                <Menu/>
                <ContentDiscover/>
                <LoadingImg/>
                <Footer/>
            </div>
        )
    }
})
export default PageDiscover