/*import {useEffect, useState} from "react";
import classes from "./TEST.module.scss"
import Ethereum from ".//../Pictures/Ethereum.png"
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../ReduxFeatures/Store/Store.ts";
import {fetchCardsAsync} from "../Api/AsyncThunk/FetchCardsAsync.ts";
import {CardSlice} from "../ReduxFeatures/CardSlice/CardSlice.ts";*/


function PAGE_TEST_ANOTHER_PROJECT() {
    return (<div>
      {/*   <ToDoList/>
        <VotingApp/>
        <Counter />
        <CardExtendedComponent/>*/}
    </div>)
}

export default PAGE_TEST_ANOTHER_PROJECT;

/*const CardExtended = (props: {
    id: string,
    name: string,
    price: string,
    img: string,
    description: string,
    author: string,
    owner: string,
    timeOfEnd: string
}) => {
    return (
        <div className={classes.card} key={props.id}>
            <div className={classes.picContainer}>
                <img className={classes.img} src={props.img} alt={props.name} loading="lazy"/>
            </div>
            <div className={classes.nameAndDescription}>
                <div className={classes.name}>
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {props.description}
                    </div>
                </div>
                <div className={classes.authorAndOwner}>
                    <div className={classes.author}>Created by
                        <div>
                            {props.author}
                        </div>
                    </div>
                    <div className={classes.owner}> Owned by
                        <div>
                            {props.owner}
                        </div>
                    </div>
                </div>
                <div className={classes.lineInfo}>
                    <div className={classes.info}>
                        <div>Current bid</div>
                        <button className={classes.priceLine}><img src={Ethereum} alt="1"/> {props.price}</button>
                    </div>
                    <div className={classes.bid}>
                        <button className={classes.buttonBid}>PLACE BID</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export {CardExtended};*/

/*const connector = connect(
    (state: RootState) => ({
        CardExposed: state.CardSlice.cards,
        isPending: state.CardSlice.isPending,
        isError: state.CardSlice.isError
    }), {fetchCardsAsync}
);
type CardExtendedProps = ConnectedProps<typeof connector>
const CardExtendedComponent = connector(({CardExposed, isPending, isError}: CardExtendedProps) => {
    if (isPending) {
        return <div>...loading...</div>;
    }
    if (isError) {
        return <div>ERROR!</div>;
    }
    if (!CardExposed.length) {
        return <div>There are no cards unfortunately</div>;
    }
    return (<div>
        {CardExposed.map((ItemToShow: CardSlice) => (
            <CardExtended
                key={ItemToShow.id}
                id={ItemToShow.id}
                name={ItemToShow.name}
                price={ItemToShow.price}
                img={ItemToShow.img}
                description={ItemToShow.description ? ItemToShow.description : "-"}
                author={ItemToShow.author ? ItemToShow.author : "-"}
                owner={ItemToShow.owner ? ItemToShow.owner : "-"}
                timeOfEnd={ItemToShow.timeOfEnd ? ItemToShow.timeOfEnd : "-"}/>
        ))}
    </div>)
})
export {CardExtendedComponent};*/

/*export const ToDoList = () => {

    interface Tasks {
        id: number,
        name: string,
        isDone: boolean,
    }

    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {

    }, [])

    const addTask = () => {
        if (newTask.trim().length > 0) {
            setTasks([
                ...tasks,
                {id: Date.now(), name: newTask, isDone: false}
            ])
            setNewTask('')
        }
    }
    const removeTask = (id: number) => {
        setTasks(tasks.filter(item => item.id !== id))
    }
    const checkTask = (id: number) => {
        setTasks(
            tasks.map(item =>
                item.id === id ? {...item, isDone: !item.isDone} : item))
    }

    return (<div style={{display: "flex", flexDirection: "column", alignItems: "center",}}>
            <h1>To-do list</h1>
            <div style={{display: "flex", flexDirection: "row"}}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="add task"
                />
                <button onClick={() => addTask()}>Add task</button>
            </div>
            <div>
                <ul>
                    {tasks.map((item) =>
                        <li key={item.id}>
                            <span
                                onClick={() => checkTask(item.id)}
                                style={{textDecoration: item.isDone ? "line-through" : "none", cursor: "pointer"}}>
                        {item.name}
                            </span>
                            <button onClick={() => removeTask(item.id)}>Delete task</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}



export const VotingApp = () => {

    interface Candidates {
        id: number,
        name: string,
        votes: number
        isLiar: boolean
    }

    const [totalVotes, setTotalVotes] = useState<number>(0);
    const [options, setOptions] = useState<Candidates[]>([
            {id: 1, name: "Lol", votes: 0, isLiar: true},
            {id: 2, name: "Kek", votes: 0, isLiar: true},
            {id: 3, name: "Cheburek", votes: 0, isLiar: false},
        ]
    );

    useEffect(() => {
        const allVotes = options.reduce((sum, options) => sum + options.votes, 0)
        setTotalVotes(allVotes)
    }, [options])

    const putVote = (id: number) => {
        setOptions(options.map(option =>
            option.id === id ? {...option, votes: option.votes + 1} : option))
    }

    const resetVotes = () => {
        setOptions(options.map(option => ({
            ...option, votes: 0
        })))
    }

    return (<div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <div>
                    <h1>App for votes</h1>
                    <ul>
                        {options.map(option => (
                            <li key={option.id}>
                                {option.name} has {option.votes} votes
                                <button onClick={() => putVote(option.id)}>
                                    put your voice in!
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button onClick={() => resetVotes()}>Reset votes!</button>
                    <span style={{display: "flex", justifyContent: "center"}}>Total votes! {totalVotes}</span>
                </div>
            </div>
        </div>
    )
}

const Counter = () => {
    const [count, setCount] = useState(0);

    const incr= () => setCount(count + 1 );
    const decr = () => setCount( count - 1);
    const reset = () => setCount (0);

    return (<div>
            <button onClick={ incr }>+</button>
            <button onClick={ decr }>-</button>
            <button onClick={ reset }>reset</button>
            <ul> Count: {count}</ul>
        </div>
    )
}
export { Counter }*/

