interface IProps {
    interval: [string, string];
    isActive: boolean;
    onClick(interval: string): void;
}

const DatepickerHour = ({ interval, isActive, onClick }: IProps) => {
    const activeClass = isActive ? "bg-gray-dark" : "";
    return (
        <li
            className={`${activeClass} flex px-[6px] py-3 w-fit h-fit text-white text-base rounded-lg cursor-pointer`}
            onClick={() => onClick(interval.join("-"))}
        >
            {interval[0]}
            <br />
            {interval[1]}
        </li>
    );
};

export default DatepickerHour;
