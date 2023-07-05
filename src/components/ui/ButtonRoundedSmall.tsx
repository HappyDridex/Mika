interface IProps {
    onClick?(): void;
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
}

const ButtonRoundedSmall = ({ onClick, className, children }: IProps) => {
    return (
        <button
            type="button"
            className={`rounded-full bg-gray2B p-[7px] text-white ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ButtonRoundedSmall;
