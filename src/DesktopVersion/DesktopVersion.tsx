import classes from "../App.module.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageMain from "../pages/pageMain.tsx";
import PageDiscover from "../pages/discover/pageDiscover.tsx";
import PageCreators from "../pages/creators/pageCreators.tsx";
import PageSells from "../pages/sells/pageSells.tsx";
import PageStats from "../pages/stats/pageStats.tsx";

const DesktopVersion= () => {
    return(
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
export default DesktopVersion