import SEO from "../components/SEO";
import ScrollToTop from "../components/ScrollToTop";
import DishesCategories from "../components/views/Menu/DishesCategories";
import DishesList from "../components/views/Menu/DishesList";
import MenuHeader from "../components/views/Menu/MenuHeader";

const Menu = () => {
    return (
        <main>
            <SEO
                title="Меню ресторана армянской и грузинской кухни Mika Tun"
                description="Здесь Вы можете ознакомиться с меню ресторана армянской и грузинской кухни Mika Tun в Ереване, Армения. В нашем меню представлен широкий ассортимент вкусных блюд армянско-грузинской кухни."
                keywords="Mika tun, мика тун армения, ресторан мика тун армения, меню ресторана, армянская кухня меню ресторана, меню грузинской кухни в ресторане, рестораны армянской кухни в ереване, ресторан грузинской кухни ереван."
            />
            <ScrollToTop />
            <MenuHeader />
            <DishesCategories />
            <DishesList />
        </main>
    );
};

export default Menu;
