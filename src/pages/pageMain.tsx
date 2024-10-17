import Menu from "../menu/Menu.tsx";
import Hero from "../Hero/hero.tsx";
import Content2 from "../content2/content2.tsx";
import Content3 from "../content3/content3.tsx";
import Footer from "../footer/footer.tsx";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../reduxTest/store/Store.ts";
import {fetchCardsAsync} from "../client/products/asyncThunk/AsyncThunk.ts";
import {useEffect, useState} from "react";

const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards,
        isLoading: state.CardSlice.isLoading,
        isError: state.CardSlice.isError,
        isPending: state.CardSlice.isPending
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>

const PageMain = connector(({cards, isLoading, isError, isPending}: Props) => {
    const [Data, setData] = useState([])
    useEffect(()=> {
        fetchCardsAsync()
    }, [])
    return (
        <div>
            <Menu/>
            <Hero/>
            <Content2/>
            <Content3/>
            <Footer/>
        </div>
    )
})
export default PageMain