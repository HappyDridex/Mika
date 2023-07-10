interface IProps {
    interval: [string, string];
    isActive: boolean;
    onClick(interval: string): void;
}

const DatepickerHour = ({ interval, isActive, onClick }: IProps) => {
    const activeClass = isActive ? "bg-gray68" : "";
    return (
        <li
            className={`${activeClass} flex h-fit w-fit cursor-pointer rounded-lg px-[3px] pb-1  text-base text-white md:px-[6px]  md:text-lg`}
            onClick={() => onClick(interval.join("-"))}
        >
            {interval[0]}
            <br />
            {interval[1]}
        </li>
    );
};

export default DatepickerHour;
