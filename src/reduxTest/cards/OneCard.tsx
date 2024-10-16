import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../store/Store.ts";
import {fetchCardsAsync} from "../../client/products/asyncThunk/AsyncThunk.ts";

const connector = connect(
    (state: RootState) => ({
        cards: state.CardSlice.cards
    }), {fetchCardsAsync}
)
type Props = ConnectedProps<typeof connector>

export const CardComponent = connector(({cards}: Props) => {
    return (
        <div> card</div>
    )
});
