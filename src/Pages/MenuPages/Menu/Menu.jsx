import { Helmet } from "react-helmet-async";
import MenuCover from "../../../Components/MenuCover/MenuCover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../HomePage/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>BISTRO BOSS | OUR MENU</title>
            </Helmet>
            
            <MenuCover img={menuImg} title="OUR MENU" subTitle="Would you like to try a dish?"/>
            <PopularMenu/>
            
        </div>
    );
};

export default Menu;