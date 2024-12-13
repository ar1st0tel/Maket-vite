import MobileHeader from "@/MobileComponents/MobileHeaderComponent/MobileHeader.tsx";
import MobileFooter from "@/MobileComponents/MobileFooterComponent/MobileFooter.tsx";
import CardExtendedComponent from "@/DesktopComponents/CardExtendedComponent/CardExtendedComponent.tsx";

const MobileCardExtendedPage = () => {
  return (
    <>
      <MobileHeader />
      <CardExtendedComponent />
      <MobileFooter />
    </>
  );
};
export default MobileCardExtendedPage;
