import { IconProps } from "./types";

const IconBurgerMenu = (props: IconProps) => {
    const { className } = props;
    return (
        <i>
            <svg
                className={`${className}`}
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="12"
                fill="none"
                viewBox="0 0 58 12"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M57 1H1"
                ></path>
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M57 11L2 11"
                ></path>
            </svg>
        </i>
    );
};

export default IconBurgerMenu;
