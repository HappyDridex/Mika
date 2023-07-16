import { Swiper, SwiperSlide } from "swiper/react";
import { forwardRef, useRef } from "react";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import ru from "date-fns/locale/ru";
import en from "date-fns/locale/en-US";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatepickerHour from "./DatepickerHour";
import { fromDateToDDMMYYYY, currentHour, currentMins, tommorowDate } from "../../utils/date-convert";

interface IProps {
    selectedDate: Date | null;
    time: string;
    onDateChange(date: Date): void;
    onTimeChange(str: string): void;
    className?: string;
}

const timeIntervals: [string, string][] = [
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

const Datepicker = ({ className, selectedDate, time, onDateChange, onTimeChange }: IProps) => {
    registerLocale("ru", ru);
    registerLocale("en-US", en);
    setDefaultLocale("ru");
    const buttonRef = useRef(null);
    const datePickerRef = useRef(null);
    const { t } = useTranslation();
    const ONE_DATE_UNIX_TIME = 86400000;
    const excludeDateIntervals: Record<string, Date>[] = [
        { start: new Date(2000, 0, 1), end: new Date(Date.now() - ONE_DATE_UNIX_TIME) },
    ];

    function getAvaliableIntervals() {
        if (selectedDate && selectedDate.getTime() >= tommorowDate.getTime()) return timeIntervals;
        return timeIntervals.filter((hours) => {
            const startTime = hours[0];
            const bookingLimitHour = currentMins > 30 ? currentHour + 1 : currentHour;
            return parseInt(startTime, 10) > bookingLimitHour;
        });
    }

    function getSelectedDateOutput(date: Date, time: string): string {
        const outputDate = `${fromDateToDDMMYYYY(date, ".")}`;
        const outputTime = !!time ? ", " + time : "";
        return outputDate + outputTime;
    }

    function HandleTime(time: string) {
        if (datePickerRef.current) {
            // @ts-ignore
            datePickerRef.current?.setOpen(false);
        }
        onTimeChange(time);
    }

    const InputButton = forwardRef(({ onClick }: any, ref) => (
        <button
            className={`${
                selectedDate ? "border border-white text-white" : "text-gray68"
            } h-[41px] w-full rounded-3xl px-4 text-start text-base md:h-[53px] md:px-7 md:text-xl`}
            onClick={onClick}
            ref={buttonRef}
            type="button"
        >
            {`${selectedDate ? getSelectedDateOutput(selectedDate, time) : t("choose_date_and_time")}`}
        </button>
    ));

    return (
        <div className={className}>
            <DatePicker
                ref={datePickerRef}
                selected={selectedDate}
                onChange={onDateChange}
                locale="ru"
                closeOnScroll={false}
                popperPlacement="auto"
                shouldCloseOnSelect={false}
                customInput={<InputButton ref={buttonRef} onClick={() => {}} />}
                excludeDateIntervals={excludeDateIntervals}
            >
                <Swiper
                    className="flex select-none gap-2 overflow-x-hidden border-2 border-transparent"
                    spaceBetween={0}
                    slidesPerView={"auto"}
                >
                    {getAvaliableIntervals().map((interval) => (
                        <SwiperSlide className="max-w-fit px-[2px]" key={interval[0]}>
                            <DatepickerHour onClick={HandleTime} interval={interval} isActive={interval.join("-") === time} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </DatePicker>
        </div>
    );
};

export default Datepicker;
