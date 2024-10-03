import classes from '../../info.module.css'

const Pic1 = () => {
    return (
            <div className={classes.bigPic}>
           {/* <img src="http://nordclan.com/uploads/a9200c5147a4421d8c2dcef2d15a1691.png" alt="1"/>*/}
        </div>
    )
}
export default Pic1;

const Pic2 = () => {
    return (
        <div className={classes.arrow}>
            {/*<img className={classes.arrow} src="http://nordclan.com/uploads/47ceae2db706497bb684567415f379a7.png" alt="1"/>*/}
        </div>
    )
}
export {Pic2};

    const Pic3 = () => {
        return (
            <div className={classes.dots}>
                {/*<img src="http://nordclan.com/uploads/ca7483673b3b4daa9c4d9df4af5798b2.png" alt="1"/>*/}
            </div>
        )
    }
export {Pic3};

const Pic4 = () => {
    return (
        <div className={classes.smallPic}>
            {/*<img src="http://nordclan.com/uploads/f6bca011c78346469d7cf97cca283aee.png" alt="1"/>*/}
        </div>
    )
}
export {Pic4};
const ButtonPic = () =>{
    return <div className={classes.buttonPicCommon}>
        <button>left</button>
        <button>r</button>
    </div>
}
export {ButtonPic};