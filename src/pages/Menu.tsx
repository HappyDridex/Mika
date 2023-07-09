import ScrollToTop from "../components/ScrollToTop";
import DishesCategories from "../components/views/Menu/DishesCategories";
import DishesList from "../components/views/Menu/DishesList";
import MenuHeader from "../components/views/Menu/MenuHeader";

const Menu = () => {
    return (
        <main>
            <ScrollToTop />
            <MenuHeader />
            <DishesCategories />
            <DishesList />
        </main>
    );
};

export default Menu;
