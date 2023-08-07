import SEO from "../components/SEO";
import ScrollToTop from "../components/ScrollToTop";
import DishesCategories from "../components/views/Menu/DishesCategories";
import DishesList from "../components/views/Menu/DishesList";
import MenuHeader from "../components/views/Menu/MenuHeader";

const Menu = () => {
    return (
        <main>
            <SEO
                title="Меню Mika Tun"
                description="Раздел с блюдами и ценами ресторана Mika Tun"
                keywords="Mika tun, Мика тун, ресторан, кухня, меню, цены, блюда"
            />
            <ScrollToTop />
            <MenuHeader />
            <DishesCategories />
            <DishesList />
        </main>
    );
};

export default Menu;
