import MobileHeader from "./MobileHeader/MobileHeader.tsx";
import MobileHero from "./MobileHero/MobileHero.tsx";
import CardsPreview from "./MobileCardsPreview/CardsPreview.tsx";
import MobileTopCollection from "./MobileTopCollection/MobileTopCollection.tsx";
import MobileExploreMarketplace from "./MobileExploreMarketplace/MobileExploreMarketplace.tsx";


const MobilePage = () => {
    return (<>
            <MobileHeader/>
            <MobileHero/>
            <CardsPreview/>
            <MobileTopCollection/>
            <MobileExploreMarketplace/>
        </>
    )
}
export default MobilePage