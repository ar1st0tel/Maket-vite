import classes from "../info.module.css";
import Texts from "./texts/texts.tsx";
import Buttons from "./buttons/buttons.tsx";

const Preview = () => {
    return (
        <div className={classes.item1}>
            <Texts/>
            <Buttons/>
        </div>
    )
}
export default Preview