import { IconProps } from "./types";

const IconArrowDown = (props: IconProps) => {
    const { className } = props;
    return (
        <i>
            <svg
                className={className}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.958 14.5676L16.5521 7.97356L15.35 6.77148L9.96585 12.1556L4.65519 6.7754L3.44531 7.96964L9.958 14.5676Z"
                    fill="currentColor"
                />
            </svg>
        </i>
    );
};

export default IconArrowDown;
