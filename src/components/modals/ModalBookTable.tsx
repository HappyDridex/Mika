import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import useEscapeKey from "../../hooks/useEscapeKey";
import { fromDateToDDMMYYYY } from "../../utils/date-convert";
import BackgroundWrapper from "./BackgroundWrapper";
import InputField from "../ui/InputField";
import ButtonRoundedBig from "../ui/ButtonRoundedBig";
import Datepicker from "../ui/Datepicker";
import ButtonRoundedSmall from "../ui/ButtonRoundedSmall";

interface IModalBookTableForm {
    name: string;
    persons: string;
    phone: string;
    date: null | Date;
    time: string;
    comment: string;
}

const ModalBookTable = () => {
    const initialForm: IModalBookTableForm = {
        name: "",
        persons: "",
        phone: "",
        date: null,
        time: "",
        comment: "",
    };

    const [formData, setFormData] = useState(initialForm);
    const navigate = useNavigate();
    const closeModal = () => navigate("/");
    const escapeKey = useEscapeKey(() => closeModal);
    const telegram = useTelegram();

    const submitIsDisabled = useMemo(() => {
        const formDataEntries = Object.entries(formData);
        if (formDataEntries.some((field) => !field[1] && field[0] !== "comment")) {
            return true;
        } else return false;
    }, [formData]);

    function handleInputText(text: string, key: keyof typeof initialForm) {
        setFormData({ ...formData, [key]: text });
    }

    function handleSelectedDate(date: Date) {
        setFormData({ ...formData, date });
    }

    async function onFormSubmit(evt: React.FormEvent) {
        if (!formData.date) return;
        evt.preventDefault();
        await telegram.sendForm({
            ...formData,
            date: fromDateToDDMMYYYY(formData.date, "."),
        });
        setFormData(initialForm);
    }

    return (
        <BackgroundWrapper onClick={closeModal} className="px-[10%] md:px-0">
            <form
                className="relative mt-[30px] h-fit w-full rounded-3xl bg-gray16 px-8 py-[36px] md:w-fit md:px-[180px]"
                onSubmit={onFormSubmit}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-center text-3xl text-white">Бронь стола</h2>
                <ButtonRoundedSmall
                    onClick={closeModal}
                    className="absolute right-[16px] top-[24px]"
                />
                <div className="mt-[47px] flex flex-col">
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
                    className="mx-auto mt-[31px] block"
                    title="Отправить"
                    color={"white"}
                    isDisabled={submitIsDisabled}
                    type="submit"
                />
            </form>
        </BackgroundWrapper>
    );
};

export default ModalBookTable;
