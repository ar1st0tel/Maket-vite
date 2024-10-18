import {useAppSelector} from "../../../reduxTest/store/Store.ts";
import classes from "../exploreMarketplace.module.scss";
import Card from "../card/card.tsx";
import {CardSlice} from "../../../reduxTest/cards/CardSlice.ts";

const CardCase = () => {
    const CardArray = useAppSelector((state) => state.CardSlice.cards as CardSlice[])
    const Pending = useAppSelector((state) => state.CardSlice.isPending)
    const Error = useAppSelector((state) => state.CardSlice.isError)

    /*const [message, setMessage] = useState(false);*/


    /*useEffect(() => {
    let delay: number;
        if (!CardArray || CardArray.length === 0) {
            delay = setTimeout(() => {
                setMessage(true);
            }, 3000);
        }
        return () => clearTimeout(delay)

    }, []);
*/
    if (Pending) {
        return <div>...loading...</div>;
    }
    if (Error) {
        return <div>ERROR!</div>;
    }
    /*if (!CardArray || CardArray.length === 0) {
        return (message ? 'Warning' : null)
    }*/
    return (
        <div className={classes.line}>
            {CardArray.map((cardItem: CardSlice)=>(
                <Card
                    key={cardItem.id}
                    id={cardItem.id}
                    name={cardItem.name}
                    price={cardItem.price}
                    img={cardItem.img}/>
            ))}
        </div>
    )
}
export {CardCase};