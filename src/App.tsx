import react from "@vitejs/plugin-react";
import {useState} from "react";
import './App.module.css'
import classes from "./App.module.css";
import Menu from "./menu/Menu.tsx";


const App = () => {
    return (
        <div>
            <div className={classes.background}>
                <div className={classes.headerBack}>
                    <Menu/> </div>
                <div className={classes.contentBack}>info</div>
                <div className={classes.appWrapper}> content1 WIDE</div>
                <div className={classes.contentBack}>content2</div>
                <div className={classes.contentBack}>content3</div>
                <div className={classes.contentBack}>advice</div>
                <div className={classes.banner}>banner tight</div>
                <div className={classes.appWrapper}>footer</div>
            </div>
        </div>
    )
}

export default App
