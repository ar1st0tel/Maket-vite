import react from "@vitejs/plugin-react";
import {useState} from "react";
import './App.module.css'
import classes from "./App.module.css";
import Menu from "./menu/Menu.tsx";


const App = () => {
    return (
        <div className={classes.appWrapper}>
            <Menu/>
        </div>
    )
}

export default App
