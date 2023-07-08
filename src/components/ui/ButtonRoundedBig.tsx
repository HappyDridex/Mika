export type IButtonProps = {
    tag?: "button" | "li";
    title: string;
    color: "black" | "white" | "transparent";
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any;
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
};

const ButtonRoundedBig = (props: IButtonProps) => {
    const {
        tag = "button",
        title,
        color,
        type = "button",
        onClick,
        className,
        isActive,
        isDisabled,
    } = props;

    const buttonThemes = {
        white: `${isActive ? "bg-black text-light" : "bg-white text-dark"}`,
        black: `${isActive ? "bg-white text-dark" : "bg-black text-light"}`,
        transparent: "bg-transparent text-light",
    };

    const buttonClasses =
        "w-max cursor-pointer rounded-full border-2 border-solid border-white px-6 md:px-8 py-[10px] md:py-3 text-base font-medium transition-all duration-300 ease-out md:px-12 md:text-lg 2xl:text-xl";

    return tag === "button" ? (
        <button
            onClick={onClick}
            className={`${
                isDisabled ? "opacity-50" : "opacity-100"
            } ${buttonClasses} ${className} ${buttonThemes[color]}`}
            disabled={isDisabled}
            type={type}
        >
            {title}
        </button>
    ) : (
        <li
            onClick={onClick}
            className={`${
                isDisabled ? "opacity-50" : "opacity-100"
            } ${buttonClasses} ${className} ${buttonThemes[color]}`}
        >
            {title}
        </li>
    );
};

export default ButtonRoundedBig;
