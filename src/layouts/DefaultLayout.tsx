import { Outlet } from "react-router-dom";
import BurgerSidebar from "../components/BurgerSidebar";
import SwitchLanguageDropDown from "../components/ui/SwitchLanguageDropDown";
import MainPageFooter from "../components/views/MainPage/MainPageFooter";

const DefaultLayout = () => {
    return (
        <>
            <div className="absolute right-[3%] top-[7%] z-50 flex">
                <SwitchLanguageDropDown />
                <BurgerSidebar className="mt-0" />
            </div>
            <Outlet />
            <MainPageFooter />
        </>
    );
};

export default DefaultLayout;
