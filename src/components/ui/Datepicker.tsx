import { Swiper, SwiperSlide } from "swiper/react";
import { forwardRef, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import ru from "date-fns/locale/ru";
import en from "date-fns/locale/en-US";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatepickerHour from "./DatepickerHour";
import { fromDateToDDMMYYYY } from "../../utils/date-convert";

interface IProps {
    date: Date | null;
    time: string;
    onDateChange(date: Date): void;
    onTimeChange(str: string): void;
    className?: string;
}

const Datepicker = ({ className, date, time, onDateChange, onTimeChange }: IProps) => {
    registerLocale("ru", ru);
    registerLocale("en-US", en);
    setDefaultLocale("ru");
    const { t } = useTranslation();
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
            className={`${
                date ? "border border-white text-white" : "text-gray68"
            } h-[41px] w-max rounded-3xl px-4 text-start text-base md:h-[53px] md:px-10 md:text-xl`}
            onClick={onClick}
            ref={ref}
            type="button"
        >
            {`${
                date
                    ? `${fromDateToDDMMYYYY(date, ".") + ", " + time}`
                    : t("choose_date_and_time")
            }`}
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
                popperPlacement="auto"
                customInput={<InputButton ref={ref} onClick={() => {}} />}
            >
                <Swiper
                    className="flex select-none gap-2 overflow-x-hidden border-2 border-transparent"
                    spaceBetween={10}
                    slidesPerView={"auto"}
                >
                    {timeIntervals.map((interval) => (
                        <SwiperSlide className="max-w-fit" key={interval[0]}>
                            <DatepickerHour
                                onClick={onTimeChange}
                                interval={interval}
                                isActive={interval.join("-") === time}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </DatePicker>
        </div>
    );
};

export default Datepicker;
