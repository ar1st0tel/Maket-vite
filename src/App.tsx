import {useEffect} from "react";
import './App.module.scss'
import classes from "./App.module.scss";
import WebFont from "webfontloader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageMain from "./pages/pageMain.tsx";
import PageDiscover from "./pages/pageDiscover.tsx";
import PageCreators from "./pages/pageCreators.tsx";
import PageSells from "./pages/pageSells.tsx";
import PageStats from "./pages/pageStats.tsx";


const App = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins', 'Public Sans', 'Inter']
            }
        });
    }, []);
    return (
        <BrowserRouter>
            <div className={classes.background}>
                <Routes>
                    <Route path="/" element={<PageMain/>}/>
                    <Route path="/discover" element={<PageDiscover/>}/>
                    <Route path="/creators" element={<PageCreators/>}/>
                    <Route path="/sells" element={<PageSells/>}/>
                    <Route path="/stats" element={<PageStats/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
