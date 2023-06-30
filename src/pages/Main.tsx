import { createPortal } from "react-dom";
import DishesSlider from "../components/views/MainPage/DishesSlider";
import OrderTable from "../components/views/MainPage/OrderTable";
import VideoPreview from "../components/views/MainPage/VideoPreview";
import BestDishes from "../components/views/MainPage/BestDishes";
import ModalBookTable from "../components/modals/ModalBookTable";

const Main = () => {
    return (
        <main className="mb-20">
            <VideoPreview />
            <BestDishes />
            <DishesSlider />
            <OrderTable />
            {createPortal(<ModalBookTable />, document.body)}
        </main>
    );
};

export default Main;
