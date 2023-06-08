type IButtonProps = {
    title: string;
    color: "black" | "white";
    onClick?: any;
};
const ButtonRoundedBig = (props: IButtonProps) => {
    const { title, color, onClick } = props;
    console.log(onClick);
    return (
        <button
            onClick={onClick}
            className={`${
                color === "black" ? "bg-black text-light" : "bg-white text-dark"
            } py-5 px-14 text-2xl rounded-full my-20 font-medium border-solid border-2 border-white`}
        >
            {title}
        </button>
    );
};

export default ButtonRoundedBig;
