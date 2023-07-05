import { useState } from "react";
import { useTranslation } from "react-i18next";
import amFlag from "../../assets/svg/armenia-flag.svg";
import ruFlag from "../../assets/svg/russia-flag.svg";
import enFlag from "../../assets/svg/britain-flag.svg";
import IconArrowDown from "../icons/IconArrowDown";
import LanguageDropDownItem from "./LanguageDropDownItem";
import { IMenuItemProps } from "./LanguageDropDownItem";

type TMenuItem = Omit<IMenuItemProps, "onClick">;

const SwitchLanguageDropDown = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const [dropDownIsOpened, setDropDownIsOpened] = useState(false);
    const [menuItems, setMenuItems] = useState<TMenuItem[]>([
        { lang: "Ru", icon: ruFlag, selected: true },
        { lang: "Am", icon: amFlag, selected: false },
        { lang: "En", icon: enFlag, selected: false },
    ]);

    const selectMenuItem = (item: TMenuItem) => {
        setMenuItems((prevState) =>
            prevState
                .map((prevItem) =>
                    prevItem.lang === item.lang
                        ? { ...prevItem, selected: true }
                        : { ...prevItem, selected: false }
                )
                .sort((a) => (a.selected ? -1 : 1))
        );
        setDropDownIsOpened(false);
        changeLanguage(item.lang.toLowerCase());
    };

    return (
        <div className="flex items-start rounded-2xl border border-white p-1 text-white">
            <div className="flex flex-col justify-items-center gap-1 sm:gap-2">
                {menuItems.map(
                    (item) =>
                        (dropDownIsOpened || item.selected) && (
                            <LanguageDropDownItem
                                onClick={() =>
                                    dropDownIsOpened
                                        ? selectMenuItem(item)
                                        : setDropDownIsOpened(true)
                                }
                                key={item.lang}
                                lang={item.lang}
                                icon={item.icon}
                            />
                        )
                )}
            </div>
            <button
                className={`${
                    dropDownIsOpened ? "rotate-180" : "rotate-0"
                } mt-[2px] p-1 transition-all sm:p-2`}
                onClick={() => setDropDownIsOpened((prevVal) => !prevVal)}
            >
                <IconArrowDown />
            </button>
        </div>
    );
};

export default SwitchLanguageDropDown;
