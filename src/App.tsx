import react from "@vitejs/plugin-react";
import {useState} from "react";
import './App.css'
import classes from "./Menu.module.css";
import Menu from "./menu/Menu.tsx";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Menu/>
        </div>
    )
}

export default App
