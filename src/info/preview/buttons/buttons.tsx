import classes from '../../info.module.scss'
const ButtonExplore = () => {
    return (
        <div>
            <button className={classes.button1}>EXPLORE MORE</button>
        </div>
    )
}
export default ButtonExplore

const ButtonCreate =() => {
    return (
        <div>
            <button className={classes.button2}>CREATE NFT</button>
        </div>
    )
}
export {ButtonCreate}