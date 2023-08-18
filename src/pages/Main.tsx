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
                title="Mika Tun – загородный ресторан в Оганаване близ Еревана"
                description="Mika Tun – это загородный ресторан в Оганаване близ Еревана с видом на Арарат. В нашем ресторане представлены вкусные блюда армянской и грузинской кухни, отведать которые можно с впечатляющим видом."
                keywords="mika tun, мика тун ресторан, мика тун оганаван, загородный ресторан ереван, ресторан с видом на арарат, рестораны с видом на арарат ереван"
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
