import MobileHeader from "../MobileHeader/MobileHeader.tsx";
import MobileHero from "../MobileHero/MobileHero.tsx";
import CardsPreview from "../MobileCardsPreview/CardsPreview.tsx";
import MobileTopCollection from "../MobileTopCollection/MobileTopCollection.tsx";
import MobileExploreMarketplace from "../MobileExploreMarketplace/MobileExploreMarketplace.tsx";
import MobileFooter from "../MobileFooter/MobielFooter.tsx";

const MobileMainPage = () => {
    return (<>
        <MobileHeader/>
        <MobileHero/>
        <CardsPreview/>
        <MobileTopCollection/>
        <MobileExploreMarketplace/>
        <MobileFooter/>
    </>)
}
export default MobileMainPage;