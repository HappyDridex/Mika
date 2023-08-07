import { createPortal } from "react-dom";
import { Outlet } from "react-router-dom";
import DishesSlider from "../components/views/MainPage/DishesSlider";
import OrderTable from "../components/views/MainPage/OrderTable";
import VideoPreview from "../components/views/MainPage/VideoPreview";
import TastefulFlavours from "../components/views/MainPage/TastefulFlavours";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

const Main = () => {
    return (
        <main>
            <SEO
                title="Mika Tun Restaurant"
                description="Ресторан армянской и грузинской кухни"
                keywords="Mika tun, restaurant, Ohanavan, Мика тун, ресторан, Оганаван, армянкая, грузинская, кухня"
            />
            <ScrollToTop />
            <VideoPreview />
            <TastefulFlavours />
            <DishesSlider />
            <OrderTable />
            {createPortal(<Outlet />, document.body)}
        </main>
    );
};

export default Main;
