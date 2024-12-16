import { BrowserRouter, Route, Routes } from "react-router-dom";
import classes from "./MobileVersion.module.scss";
import MobileDiscoverPage from "@/MobilePages/MobileDiscoverPage.tsx";
import MobileMainPage from "@/MobilePages/MobileMainPage.tsx";
import MobileCardExtendedPage from "@/MobilePages/MobileCardExtendedPage.tsx";
import PAGE_TEST_ANOTHER_PROJECT from "@/DesktopPages/PAGE_TEST_ANOTHER_PROJECT.tsx";

const MobileVersion = () => {
  return (
    <BrowserRouter>
      <div className={classes.background}>
        <Routes>
          <Route path="/" element={<MobileMainPage />} />
          <Route path="/discover" element={<MobileDiscoverPage />} />
          <Route path="/card/:id" element={<MobileCardExtendedPage />} />
          <Route path="test" element={<PAGE_TEST_ANOTHER_PROJECT />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default MobileVersion;
