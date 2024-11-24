import {useEffect} from "react";
import './App.module.scss'
import classes from "./App.module.scss";
import WebFont from "webfontloader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageMain from "./pages/pageMain.tsx";
import PageDiscover from "./pages/discover/pageDiscover.tsx";
import PageCreators from "./pages/creators/pageCreators.tsx";
import PageSells from "./pages/sells/pageSells.tsx";
import PageStats from "./pages/stats/pageStats.tsx";
import MobilePage from "./MobileComponents/MobilePage.tsx";

function App () {
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
                    <Route path="/mobile" element={<MobilePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
