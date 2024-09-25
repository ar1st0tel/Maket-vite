import react from "@vitejs/plugin-react";
import SearchCommon from "./searchCommon/SearchCommon.tsx";

const Menu = () => {
    return (<div>
        <SearchCommon/>
        <Logo/>
        <Buttons/>
        <Nav/>
    </div>)

}
export default Menu