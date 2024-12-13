import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./MobileVersion.module.scss";
import MobileDiscoverPage from "@/MobilePages/MobileDiscoverPage.tsx";
import MobileMainPage from "@/MobilePages/MobileMainPage.tsx";
import MobileCardExtendedPage from "@/MobilePages/MobileCardExtendedPage.tsx";

const MobileVersion = () => {
  return (
    <BrowserRouter>
      <div className={classes.background}>
        <Routes>
          <Route path="/" element={<MobileMainPage />} />
          <Route path="/discover" element={<MobileDiscoverPage />} />
          <Route path="/card/:id" element={<MobileCardExtendedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default MobileVersion;
