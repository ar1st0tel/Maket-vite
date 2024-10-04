import classes from './buttons.module.scss'
const ButtonExplore = () => {
    return (
        <div>
            <button className={classes.button1}>EXPLORE MORE</button>
        </div>
    )
}
export {ButtonExplore}

const ButtonCreate =() => {
    return (
        <div>
            <button className={classes.button2}>CREATE NFT</button>
        </div>
    )
}
export {ButtonCreate}