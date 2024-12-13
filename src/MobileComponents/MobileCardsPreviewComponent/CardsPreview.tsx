import classes from "./CardsPreview.module.scss";
import TopBannerPictures from "@/DesktopComponents/TopBannerComponent/TopBannerPictures/TopBannerPictures.tsx";

const CardsPreview = () => {
  return (
    <div className={classes.cardsPreview}>
      <TopBannerPictures />
    </div>
  );
};
export default CardsPreview;
