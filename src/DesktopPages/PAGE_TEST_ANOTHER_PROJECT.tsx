import NavigationComponent from "@/DesktopComponents/NavigationComponent/NavigationComponent.tsx";
import FooterComponent from "@/DesktopComponents/FooterComponent/FooterComponent.tsx";
import TopBannerComponent from "@/DesktopComponents/TopBannerComponent/TopBannerComponent.tsx";
import TopCollectionComponent from "@/DesktopComponents/TopCollectionComponent/TopCollectionComponent.tsx";
import ExploreMarketplaceComponent from "@/DesktopComponents/ExploreMarketplaceComponent/ExploreMarketplaceComponent.tsx";

function PAGE_TEST_ANOTHER_PROJECT() {
  return (
    <>
      <NavigationComponent />
      <TopBannerComponent />
      <TopCollectionComponent />
      <ExploreMarketplaceComponent />
      <FooterComponent />
    </>
  );
}

export default PAGE_TEST_ANOTHER_PROJECT;
