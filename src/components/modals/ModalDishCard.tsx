import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import useNavigateWithSearchParams from "../../hooks/useNavigateWithSearchParams";
import useDishes from "../../hooks/useDishes";
import useEscapeKey from "../../hooks/useEscapeKey";
import BackgroundWrapper from "./BackgroundWrapper";
import ButtonRoundedBig from "../ui/ButtonRoundedBig";
import ButtonRoundedSmall from "../ui/ButtonRoundedSmall";
import IconArrowDown from "../icons/IconArrowDown";
import IconCross from "../icons/IconCross";

const ModalDishCard = () => {
    const [showCard, setShowCard] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const navigateWithSearchParams = useNavigateWithSearchParams();
    const closeModal = () => navigateWithSearchParams("..");
    const escapeKey = useEscapeKey(closeModal);
    const { t } = useTranslation();
    const dishes = useDishes();
    const selectedDish = dishes.find((dish) => {
        if (params.dish) return dish.id === +params?.dish;
    });

    function onNextDishClick() {
        if (!selectedDish) return;
        const nextDish = dishes.find((dish) => dish.id === selectedDish.id + 1);
        navigateWithSearchParams(`../${nextDish ? nextDish.id : dishes[0].id}`);
    }

    useEffect(() => {
        setTimeout(() => setShowCard(true), 0);
    }, []);

    return (
        <CSSTransition in={showCard} timeout={200} classNames="from-transparent">
            {() =>
                showCard && (
                    <BackgroundWrapper onClick={closeModal}>
                        <div
                            className="relative mt-[10vh] flex w-3/4 flex-col overflow-hidden rounded-3xl text-white md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ButtonRoundedSmall className="absolute right-[15px] top-[15px] z-50" onClick={closeModal}>
                                <IconCross className="w-[16px]" />
                            </ButtonRoundedSmall>
                            <div className="h-auto w-full md:w-[45%]">
                                <img
                                    className="h-full w-full object-cover"
                                    src={`/images/dishes/${selectedDish?.id}.JPG`}
                                    alt="Блюдо"
                                />
                            </div>

                            <div className="relative flex w-full shrink-0 flex-col bg-gray16 p-6 pr-12 md:w-[55%]">
                                <h3 className="mt-1 text-xl text-white md:mt-5 md:text-2xl xl:text-4xl">{selectedDish?.name}</h3>
                                <p className="mt-1 text-base text-white md:mt-5 md:text-lg"></p>
                                <div className="flex-1">
                                    <span className="mt-2 block w-fit rounded-[20px] bg-gray2B px-3 py-1 text-lg md:mt-5 md:rounded-[54px] md:px-7 md:py-3 xl:text-2xl">
                                        {selectedDish?.price}
                                    </span>
                                </div>
                                <div
                                    className="absolute right-4 top-0 flex h-[25%] cursor-pointer  items-center hover:scale-110 md:top-1/2 md:h-1/2 md:-translate-y-1/2"
                                    onClick={onNextDishClick}
                                >
                                    <ButtonRoundedSmall className="-rotate-90">
                                        <IconArrowDown />
                                    </ButtonRoundedSmall>
                                </div>
                                <ButtonRoundedBig
                                    color="transparent"
                                    title={t("reserve_table")}
                                    className="mb-4 mr-12 mt-10 w-fit"
                                    onClick={() => navigate("/booking")}
                                />
                            </div>
                        </div>
                    </BackgroundWrapper>
                )
            }
        </CSSTransition>
    );
};

export default ModalDishCard;
