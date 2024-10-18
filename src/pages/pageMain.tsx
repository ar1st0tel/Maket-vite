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
        isLoaded: state.CardSlice.isLoaded,
        isError: state.CardSlice.isError,
        isPending: state.CardSlice.isPending
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>

const PageMain = connector(({cards, isLoaded, isError, isPending, fetchCardsAsync}: Props) => {
    /*const [Data, setData] = useState([])*/
    const [message, setMessage] = useState(false);
    useEffect(()=> {
        fetchCardsAsync()
    }, [fetchCardsAsync]);



    // потом удалить
    useEffect(() => {
        console.log("Cards data updated:", cards);
        console.log("isLoaded:", isLoaded);
        console.log("isPending:", isPending);
        console.log("isError:", isError);
    }, [cards, isLoaded, isPending, isError]);






    useEffect(() => {
        let delay: number;
        if (!cards || cards.length === 0) {
            delay = setTimeout(() => {
                setMessage(true);
            }, 1000);
        }
        return () => clearTimeout(delay)

    }, [cards]);

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
        return (
            <div>
                <Menu/>
                <Hero/>
                <Content2/>
                <Content3/>
                <Footer/>
            </div>
        )
    }
    return null;
})
export default PageMain
