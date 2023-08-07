import SEO from "../../components/SEO";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTelegram } from "../../hooks/useTelegram";
import useEscapeKey from "../../hooks/useEscapeKey";
import { fromDateToDDMMYYYY } from "../../utils/date-convert";
import BackgroundWrapper from "./BackgroundWrapper";
import InputField from "../ui/InputField";
import ButtonRoundedBig from "../ui/ButtonRoundedBig";
import Datepicker from "../ui/Datepicker";
import ButtonRoundedSmall from "../ui/ButtonRoundedSmall";
import IconTickGreenRound from "../icons/IconTickGreenRound";
import IconCross from "../icons/IconCross";
import { CSSTransition } from "react-transition-group";
import { fieldsAreFilled } from "../../utils/validation";

interface IModalBookTableForm {
    name: string;
    persons: string;
    phone: string;
    date: null | Date;
    time: string;
    comment: string;
}

const initialForm: IModalBookTableForm = {
    name: "",
    persons: "",
    phone: "",
    date: null,
    time: "",
    comment: "",
};

const ModalBookTable = () => {
    const [formData, setFormData] = useState(initialForm);
    const [showForm, setShowForm] = useState(false);
    const [formIsSent, setFormIsSent] = useState(false);
    const navigate = useNavigate();
    const closeModal = () => {
        setShowForm(false);
        navigate(-1);
    };
    const escapeKey = useEscapeKey(closeModal);
    const telegram = useTelegram();
    const { t } = useTranslation();
    const inputMask = "+";

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
        evt.preventDefault();

        const phoneRegex = /^(\+374|\+7|\+\d{1,3})\d{10}$/;
        if (!phoneRegex.test(inputMask + formData.phone)) {
            alert("Пожалуйста, введите правильный номер телефона.");
            return;
        }
        const { name, persons, phone, time } = formData;
        if (!fieldsAreFilled(name, persons, phone, time) || !formData.date) return;
        try {
            setFormData(initialForm);
            await telegram.sendForm({
                ...formData,
                date: fromDateToDDMMYYYY(formData.date, "."),
            });
            setFormIsSent(true);
        } catch (e) {
            alert("Ошибка при отправке брони");
            closeModal();
            throw new Error("Ошибка во время отправки формы");
        }
    }

    useEffect(() => {
        setTimeout(() => setShowForm(true), 0);
    }, []);

    return (
        <>
            <SEO
                title="Бронирование стола"
                description="На данной странице можно забронировать стол на удобное время"
                keywords="Mika tun, Мика тун, ресторан, бронирование, стола, стол, забронировать"
            />

            <CSSTransition in={showForm} timeout={200} classNames="from-transparent">
                {() =>
                    showForm && (
                        <BackgroundWrapper className="overflow-y-auto px-[5%] md:px-0">
                            {!formIsSent && (
                                <form
                                    className="relative mb-[500px] mt-[8vh] h-fit w-full rounded-3xl bg-gray16 px-5 py-[22px] md:w-fit md:px-[180px] md:py-[36px]"
                                    onSubmit={onFormSubmit}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <h2 className="mt-6 text-center text-2xl text-white md:text-3xl">
                                        {t("table_reservation")}
                                    </h2>
                                    <ButtonRoundedSmall
                                        onClick={closeModal}
                                        className="absolute right-3 top-3 md:right-4 md:top-6"
                                    >
                                        <IconCross />
                                    </ButtonRoundedSmall>
                                    <div className="mt-[30px] flex flex-col md:mt-[47px]">
                                        <InputField
                                            onInput={(text) => handleInputText(text, "name")}
                                            placeholder={t("your_name")}
                                        />
                                        <InputField
                                            onInput={(text) => handleInputText(text, "phone")}
                                            value={formData.phone}
                                            onlyNumbers
                                            inputMask={inputMask}
                                            placeholder={t("phone_number")}
                                            className="mt-[18px] md:mt-[26px]"
                                        />
                                        <InputField
                                            onInput={(text) => handleInputText(text, "persons")}
                                            value={formData.persons}
                                            onlyNumbers
                                            placeholder={t("persons_amount")}
                                            className="mt-[18px] md:mt-[26px]"
                                        />
                                        <Datepicker
                                            onDateChange={handleSelectedDate}
                                            onTimeChange={(text) => handleInputText(text, "time")}
                                            selectedDate={formData.date}
                                            time={formData.time}
                                            className="mt-[18px] md:mt-[26px]"
                                        />
                                        <InputField
                                            onInput={(text) => handleInputText(text, "comment")}
                                            placeholder={t("comment")}
                                            className="mt-[18px] md:mt-[26px]"
                                        />
                                    </div>
                                    <ButtonRoundedBig
                                        className="mx-auto mt-[31px] block"
                                        title={t("send")}
                                        color={"white"}
                                        isDisabled={submitIsDisabled}
                                        type="submit"
                                    />
                                </form>
                            )}
                            <CSSTransition in={formIsSent} timeout={200} classNames="from-transparent">
                                {() => {
                                    return (
                                        formIsSent && (
                                            <div className="relative mt-[10vh] h-fit rounded-3xl bg-gray16 px-3 py-[22px] md:w-fit md:px-[40px] md:py-[36px]">
                                                <ButtonRoundedSmall
                                                    onClick={closeModal}
                                                    className="absolute right-3 top-3 md:right-4 md:top-6"
                                                >
                                                    <IconCross />
                                                </ButtonRoundedSmall>
                                                <div className="flex flex-col items-center">
                                                    <div className="h-[70px] w-[70px] lg:h-[100px] lg:w-[100px]">
                                                        <IconTickGreenRound className="h-full w-full" />
                                                    </div>
                                                    <h2 className="mt-6 text-center text-xl text-white sm:text-3xl md:mt-9 md:text-4xl lg:text-5xl">
                                                        {t("booking_request_was_sent")}
                                                    </h2>
                                                    <p className="mt-2 px-3 text-center text-lg text-grayBB sm:text-xl md:px-10 md:text-2xl lg:text-3xl">
                                                        {t("our_manager_will_contact_you")}
                                                    </p>
                                                    <ButtonRoundedBig
                                                        onClick={closeModal}
                                                        className="mt-10 block sm:mt-14 md:mt-20 lg:mt-28"
                                                        title={t("close")}
                                                        color={"transparent"}
                                                        type="submit"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    );
                                }}
                            </CSSTransition>
                        </BackgroundWrapper>
                    )
                }
            </CSSTransition>
        </>
    );
};

export default ModalBookTable;
