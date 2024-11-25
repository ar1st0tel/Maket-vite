import {useEffect} from "react";
import './App.module.scss'
import WebFont from "webfontloader";
import MobileVersion from "./MobileComponents/MobileVersion.tsx";
import './variables/variables.scss'
import {useMediaQuery} from "react-responsive";
import DesktopVersion from "./DesktopVersion/DesktopVersion.tsx";

function App () {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Poppins', 'Public Sans', 'Inter']
            }
        });
    }, []);
    const isMobile = useMediaQuery({ maxWidth: 375 });
    return (<div>
            {isMobile ? <MobileVersion/> : <DesktopVersion/>}
        </div>
    )
}

export default App
