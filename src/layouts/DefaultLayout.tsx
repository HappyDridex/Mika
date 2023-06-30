import { Outlet } from "react-router-dom";
import BurgerSidebar from "../components/BurgerSidebar";

const DefaultLayout = () => {
    return (
        <>
            <BurgerSidebar />
            <Outlet />
        </>
    );
};

export default DefaultLayout;
