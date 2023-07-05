import BackgroundWrapper from "../modals/BackgroundWrapper";

interface IDishCardProps {
    name: string;
    price: string;
    id: number;
    onClick?(): void;
}

const DishCard = (props: IDishCardProps) => {
    const { name, price, id, onClick } = props;
    return (
        <div
            onClick={onClick}
            className="flex h-full w-full cursor-pointer flex-col justify-between gap-3"
        >
            <div
                className="h-0 shrink-0 rounded-3xl bg-cover bg-no-repeat pb-[77%]"
                style={{ backgroundImage: `url("/images/dishes/${id}.JPG")` }}
            ></div>
            <div className="flex h-full flex-col justify-between">
                <p className="h-fit text-lg text-white md:text-2xl xl:text-3xl">{name}</p>
                <div className="mt-4 h-fit w-fit rounded-full bg-darkMuted px-4 py-1 md:px-5 md:py-2 xl:px-9 xl:py-3">
                    <span className="text-lg text-light md:text-xl xl:text-2xl">
                        {price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
