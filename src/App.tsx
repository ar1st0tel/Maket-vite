import react from "@vitejs/plugin-react";
import {useState} from "react";
import './App.module.scss'
import classes from "./App.module.scss";
import Menu from "./menu/Menu.tsx";
/*import Info from "./info/info.tsx";*/
import Content2 from "./content2/content2.tsx";
import Content3 from "./content3/content3.tsx";
import Footer from "./footer/footer.tsx";
import Hero from "./Hero/hero.tsx";


const App = () => {
    return (
        <div>
            <div className={classes.background}>
                <div className={classes.headerBack}>
                    <Menu/></div>
                {/* <div className={classes.content1Back}> <Info/> </div>*/}
                <div className={classes.content1Back}><Hero/></div>
                <div className={classes.contentBack}><Content2/></div>
                <div className={classes.contentBack}><Content3/></div>
                <div className={classes.appWrapper}><Footer/></div>
            </div>
        </div>
    )
}

export default App
