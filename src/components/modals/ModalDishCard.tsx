import BackgroundWrapper from "./BackgroundWrapper";

const ModalDishCard = () => {
    return (
        <BackgroundWrapper>
            <div className="mt-[5%] text-white rounded-3xl w-1/4 overflow-hidden">
                <div className="w-full h-auto">
                    <img className="object-contain w-full h-full" src={require("../../assets/images/dish3.jpg")} alt="123123123" />
                </div>
                <div className="bg-darkGray p-5 ">
                    <h3 className="text-white text-3xl">Салат</h3>
                    <p className="text-white text-lg mt-5">Изысканное мясо от шеф-повара Славы, который приготовил его своими бережными руками</p>
                </div>
            </div>
        </BackgroundWrapper>
    );
};

export default ModalDishCard;
