import { useEffect } from "react";
import "./App.module.scss";
import WebFont from "webfontloader";
import { useMediaQuery } from "react-responsive";
import MobileVersion from "@/DevicesVersions/MobileVersion/MobileVersion.tsx";
import DesktopVersion from "@/DevicesVersions/DesktopVersion/DesktopVersion.tsx";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Public Sans", "Inter"],
      },
    });
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 375 });
  return <>{isMobile ? <MobileVersion /> : <DesktopVersion />}</>;
}

export default App;
