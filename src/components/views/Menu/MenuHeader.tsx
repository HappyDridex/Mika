import ButtonRoundedBig from "../../ui/ButtonRoundedBig";
import topBgMenu from "./../../../assets/images/top-menu-bg.png";

const MenuHeader = () => {
    return (
        <div
            style={{ backgroundImage: `url(${topBgMenu})` }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen bg-cover bg-no-repeat w-full flex flex-col items-center"
        >
            <h1 className="text-white text-5xl text-center text- mt-[153px]">
                Меню ресторана
            </h1>
            <ButtonRoundedBig
                title="Забронировать стол"
                color={"transparent"}
                className="mt-12"
            />
        </div>
    );
};

export default MenuHeader;
