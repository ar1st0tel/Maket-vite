import Menu from "../menu/Menu.tsx";
import Hero from "../Hero/hero.tsx";
import Content2 from "../content2/Content2.tsx";
import Content3 from "../content3/content3.tsx";
import Footer from "../footer/footer.tsx";

const PageMain = () => {
        return (
            <div>
                <Menu/>
                <Hero/>
                <Content2/>
                <Content3/>
                <Footer/>
            </div>
        )
    }
export default PageMain
