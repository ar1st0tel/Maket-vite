import react from "@vitejs/plugin-react";
import {useState} from "react";
import './App.module.scss'
import classes from "./App.module.scss";
import Menu from "./menu/Menu.tsx";
import Info from "./info/info.tsx";
import ContentWide from "./contentWide/contentWide.tsx";


const App = () => {
    return (
        <div>
            <div className={classes.background}>
                <div className={classes.headerBack}>
                    <Menu/> </div>
                <div className={classes.content1Back}> <Info /> </div>
                <div className={classes.appWrapper}><ContentWide/></div>
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
