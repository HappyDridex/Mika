interface IDishCard {
    price: string;
    idx?: number;
}

const DishCard = (props: IDishCard) => {
    const { price, idx = 0 } = props;
    return (
        <div>
            <img src={require(`./../../assets/images/dish${idx + 1}.png`)} alt="Блюдо" />
            <div className="bg-darkMuted w-fit rounded-full py-3 px-9 mt-5">
                <span className="text-light text-2xl">{price}</span>
            </div>
        </div>
    );
};

export default DishCard;
