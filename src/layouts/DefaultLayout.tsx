import { Outlet } from "react-router-dom";
import BurgerSidebar from "../components/BurgerSidebar";
import SwitchLanguageDropDown from "../components/ui/SwitchLanguageDropDown";

const DefaultLayout = () => {
    return (
        <>
            <div className="absolute right-[3%] top-[7%] z-50 flex">
                <SwitchLanguageDropDown />
                <BurgerSidebar className="mt-0" />
            </div>
            <Outlet />
        </>
    );
};

export default DefaultLayout;
