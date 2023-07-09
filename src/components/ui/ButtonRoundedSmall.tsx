interface IProps {
    onClick?(): void;
    className?: string;
    color?: "gray" | "transparent";
    children?: string | JSX.Element | JSX.Element[];
}

const ButtonRoundedSmall = ({ onClick, className, children, color = "gray" }: IProps) => {
    const buttonTheme = color === "gray" ? "bg-gray2B text-white" : "bg-transparent text-black";
    return (
        <button
            type="button"
            className={`flex h-[30px] w-[30px] items-center justify-center rounded-full p-[4px] md:h-[40px] md:w-[40px] ${buttonTheme} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ButtonRoundedSmall;
