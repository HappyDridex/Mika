export type IButtonProps = {
    title: string;
    color: "black" | "white" | "transparent";
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any;
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
};

const ButtonRoundedBig = (props: IButtonProps) => {
    const { title, color, type = "button", onClick, className, isActive, isDisabled } = props;

    const buttonThemes = {
        white: `${isActive ? "bg-black text-light" : "bg-white text-dark"}`,
        black: `${isActive ? "bg-white text-dark" : "bg-black text-light"}`,
        transparent: "bg-transparent text-light",
    };

    return (
        <button
            onClick={onClick}
            className={`${className} ${buttonThemes[color]} 
            ${
                isDisabled ? "opacity-50" : "opacity-100"
            } py-5 px-14 text-2xl rounded-full font-medium border-solid border-2 border-white transition-all duration-300 ease-out`}
            disabled={isDisabled}
            type={type}
        >
            {title}
        </button>
    );
};

export default ButtonRoundedBig;
