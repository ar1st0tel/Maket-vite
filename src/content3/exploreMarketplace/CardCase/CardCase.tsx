import classes from "../exploreMarketplace.module.scss";
import Card from "../card/card.tsx";
import {CardSlice} from "../../../reduxTest/cards/CardSlice.ts";
import {connect, ConnectedProps} from "react-redux";
import {fetchCardsAsync} from "../../../client/products/asyncThunk/fetchCardsAsync.ts";
/*import {useState} from "react";*/
/*import Pagination from "../paginator/Paginator.tsx";*/
import {RootState} from "../../../reduxTest/store/Store.ts";

//Закомментировал Пагинатор
//В {CardArray.map((cardItem: CardSlice) => ( заменить CardArray на currentItems чтобы работало
const connector = connect(
    (state:RootState) => ({
        CardArray: state.CardSlice.cards,
        isPending: state.CardSlice.isPending,
        isError: state.CardSlice.isError
    }), {fetchCardsAsync}
);
type CardCaseProps = ConnectedProps<typeof connector>
const CardCase = connector(({CardArray, isPending, isError}: CardCaseProps) =>{
    /*const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const totalPages = Math.ceil(CardArray.length / itemsPerPage);
    const indexOfLastItem = itemsPerPage * currentPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = CardArray.slice(indexOfFirstItem, indexOfLastItem);*/


   /* const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };*/

    if (isPending) {
        return <div>...loading...</div>;
    }
    if (isError) {
        return <div>ERROR!</div>;
    }
    if (!CardArray.length) {
        return <div>There are no cards unfortunately</div>;
    }


return (
    <div>
        <div className={classes.line}>
            {CardArray.map((cardItem: CardSlice) => (
                <Card
                    key={cardItem.id}
                    id={cardItem.id}
                    name={cardItem.name}
                    price={cardItem.price}
                    img={cardItem.img}
                />
            ))}
        </div>
        {/*<Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
                left: currentPage === 1,
                right: currentPage === totalPages,
            }}
        />*/}
    </div>
);
});
export {CardCase};