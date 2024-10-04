import react from "@vitejs/plugin-react";
import {useState} from "react";
import './App.module.scss'
import classes from "./App.module.scss";
import Menu from "./menu/Menu.tsx";
import Info from "./info/info.tsx";
import ContentWide from "./contentWide/contentWide.tsx";
import Content2 from "./content2/content2.tsx";
import Content3 from "./content3/content3.tsx";


const App = () => {
    return (
        <div>
            <div className={classes.background}>
                <div className={classes.headerBack}>
                    <Menu/> </div>
                <div className={classes.content1Back}> <Info /> </div>
                <div className={classes.appWrapper}><ContentWide/></div>
                <div className={classes.contentBack}><Content2/></div>
                <div className={classes.contentBack}><Content3/></div>
                <div className={classes.contentBack}>advice</div>
                <div className={classes.banner}>banner tight</div>
                <div className={classes.appWrapper}>footer</div>
            </div>
        </div>
    )
}

export default App
