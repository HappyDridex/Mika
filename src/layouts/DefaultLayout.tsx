import { Outlet } from "react-router-dom";
import BurgerSidebar from "../components/BurgerSidebar";
import SwitchLanguageDropDown from "../components/ui/SwitchLanguageDropDown";
import Footer from "../components/Footer";

const DefaultLayout = () => {
    return (
        <>
            <div className="absolute right-[3%] top-[7%] z-50 flex">
                <SwitchLanguageDropDown />
                <BurgerSidebar className="mt-0" />
            </div>
            <Outlet />
            <Footer />
        </>
    );
};

export default DefaultLayout;
