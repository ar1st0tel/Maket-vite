import classes from "./buttonLeftRight.module.scss";

const ButtonPic = () =>{
    return(
        <div className={classes.Common}>
            <button><div className={classes.Left}>L</div></button>
            <button><div className={classes.Right}>R</div></button>
        </div>
    )
}
export {ButtonPic};