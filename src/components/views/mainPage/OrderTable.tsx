import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import whatsAppLogo from "./../../../assets/svg/whatsapp.svg";

const OrderTable = () => {
    const openYandexMapsToPath = () => {
        window.open("https://yandex.ru/maps/?rtext=~40.346392%2C44.390706");
    };
    return (
        <section className="container flex flex-col items-center text-center mt-[200px] text-light">
            <h2 className=" font-bold text-6xl">Заказ столов</h2>
            <p className=" font-normal text-5xl mt-6">Пишите нам</p>

            <a href="https://wa.me/37493129492" target="_blank" className="mt-12 mx-auto">
                <img className="w-[90px] h-auto" src={whatsAppLogo} alt="whatsapp" />
            </a>
            <ButtonRoundedBig title={"Как к нам проехать?"} color={"black"} onClick={openYandexMapsToPath} />
        </section>
    );
};

export default OrderTable;
