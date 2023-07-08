import { IconProps } from "./types";

const IconBurgerMenu = (props: IconProps) => {
    const { className } = props;
    return (
        <i>
            <svg
                className={`${className} w-full`}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19.4167 8.5835L8.58337 19.4168M8.58337 8.5835L19.4167 19.4168"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </i>
    );
};

export default IconBurgerMenu;
