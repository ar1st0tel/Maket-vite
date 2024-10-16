import Menu from "../menu/Menu.tsx";
import Hero from "../Hero/hero.tsx";
import Content2 from "../content2/content2.tsx";
import Content3 from "../content3/content3.tsx";
import Footer from "../footer/footer.tsx";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../reduxTest/store/Store.ts";
import {fetchCardsAsync} from "../client/products/asyncThunk/AsyncThunk.ts";

const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>

const PageMain = connector(({cards}: Props) => {

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