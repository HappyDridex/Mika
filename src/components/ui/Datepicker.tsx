import { forwardRef, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import DatepickerHour from "./DatepickerHour";
import { fromDateToDDMMYYYY } from "../../utils/date-convert";

interface IProps {
    date: Date;
    time: string;
    onDateChange(date: Date): void;
    onTimeChange(str: string): void;
    className?: string;
}

const Datepicker = ({ className, date, time, onDateChange, onTimeChange }: IProps) => {
    registerLocale("ru", ru);
    setDefaultLocale("ru");

    const timeIntervals: [string, string][] = [
        ["09:00", "09:30"],
        ["10:00", "10:30"],
        ["11:00", "11:30"],
        ["12:00", "12:30"],
        ["13:00", "13:30"],
        ["14:00", "14:30"],
        ["15:00", "15:30"],
        ["16:00", "16:30"],
        ["17:00", "17:30"],
        ["18:00", "18:30"],
        ["19:00", "19:30"],
        ["20:00", "20:30"],
        ["21:00", "21:30"],
        ["22:00", "22:30"],
    ];

    const ref = useRef(null);

    const InputButton = forwardRef(({ onClick }: any, ref: any) => (
        <button
            className="w-full h-[60px] text-white text-xl text-start pl-10"
            onClick={onClick}
            ref={ref}
        >
            {fromDateToDDMMYYYY(date, ".")} {time}
        </button>
    ));

    useEffect(() => {
        onTimeChange(timeIntervals[0].join("-"));
    }, []);

    return (
        <div className={className}>
            <DatePicker
                selected={date}
                onChange={onDateChange}
                locale="ru"
                closeOnScroll={false}
                customInput={<InputButton ref={ref} onClick={() => {}} />}
            >
                <ul className="border-2 pb-4 border-transparent overflow-x-scroll gap-2 flex select-none">
                    {timeIntervals.map((interval) => {
                        return (
                            <DatepickerHour
                                onClick={onTimeChange}
                                key={interval[0]}
                                interval={interval}
                                isActive={interval.join("-") === time}
                            />
                        );
                    })}
                </ul>
            </DatePicker>
        </div>
    );
};

export default Datepicker;
