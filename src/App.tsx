import react from "@vitejs/plugin-react";
import {useState} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from "./menu/Menu.tsx";


const App = () => {
    return ( <div>
    <Menu/>
    <HeroText/>
    <HeroHeader/>
    <Features/>
    < Weekly/>
    <TopCollection/>
    <Explore/>
    <Unleash/>
    <banner/>
    <Footer/>
    <BG/>
        </div>
)
}

export default App
