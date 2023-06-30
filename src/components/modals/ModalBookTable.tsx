import { useMemo, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import BackgroundWrapper from "./BackgroundWrapper";
import InputField from "../ui/InputField";
import ButtonRoundedBig from "../ui/ButtonRoundedBig";
import Datepicker from "../ui/Datepicker";
import { fromDateToDDMMYYYY } from "../../utils/date-convert";

const ModalBookTable = () => {
    const initialForm = {
        name: "",
        persons: "",
        phone: "",
        date: new Date(),
        time: "",
        comment: "",
    };

    const [formData, setFormData] = useState(initialForm);
    const submitIsDisabled = useMemo(() => {
        return !formData.name || !formData.persons;
    }, [formData]);
    const telegram = useTelegram();

    function handleInputText(text: string, key: keyof typeof initialForm) {
        setFormData({ ...formData, [key]: text });
    }

    function handleSelectedDate(date: Date) {
        setFormData({ ...formData, date });
    }

    function onFormSubmit(evt: React.FormEvent) {
        console.log("раз раз");
        evt.preventDefault();
        telegram.sendForm({ ...formData, date: fromDateToDDMMYYYY(formData.date, ".") });
    }

    return (
        <BackgroundWrapper>
            <form
                className="bg-gray-dark rounded-3xl py-[66px] px-[180px] h-fit mt-[30px]"
                onSubmit={onFormSubmit}
            >
                <h2 className="text-center text-white text-4xl">Бронь стола</h2>
                <div className="flex flex-col mt-[67px]">
                    <InputField
                        onInput={(text) => handleInputText(text, "name")}
                        placeholder="Ваше имя"
                    />
                    <InputField
                        onInput={(text) => handleInputText(text, "phone")}
                        placeholder="Номер телефона"
                        className="mt-[26px]"
                    />
                    <InputField
                        onInput={(text) => handleInputText(text, "persons")}
                        placeholder="Количество персон"
                        className="mt-[26px]"
                    />
                    <Datepicker
                        onDateChange={handleSelectedDate}
                        onTimeChange={(text) => handleInputText(text, "time")}
                        date={formData.date}
                        time={formData.time}
                        className="mt-[26px]"
                    />
                    <InputField
                        onInput={(text) => handleInputText(text, "comment")}
                        placeholder="Комментарий"
                        className="mt-[26px]"
                    />
                </div>
                <ButtonRoundedBig
                    className="mt-[71px]"
                    title="Забронировать стол"
                    color={"white"}
                    isDisabled={submitIsDisabled}
                    type="submit"
                />
            </form>
        </BackgroundWrapper>
    );
};

export default ModalBookTable;
