import { Helmet } from "react-helmet-async";
import MenuCover from "../../../Components/MenuCover/MenuCover";

const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>BISTRO BOSS | OUR MENU</title>
            </Helmet>
            
            <MenuCover/>
            
        </div>
    );
};

export default Menu;