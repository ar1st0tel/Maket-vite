import Menu from "../../menu/Menu.tsx";
import Footer from "../../footer/footer.tsx";
import ContentDiscover, {LoadingImg} from "./contentDiscover.tsx";

const  PageDiscover = () => {
    return ( <div>
            <Menu/>
            <ContentDiscover/>
            <LoadingImg/>
            <Footer/>
        </div>

    )
}
export default PageDiscover