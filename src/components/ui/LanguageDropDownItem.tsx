export interface IMenuItemProps {
    lang: string;
    icon: string;
    selected?: boolean;
    onClick(): void;
}

const LanguageDropDownItem = ({ lang, icon, selected, onClick }: IMenuItemProps) => {
    return (
        <div
            className="flex w-full cursor-pointer gap-[10px] p-1 sm:p-2"
            onClick={onClick}
        >
            <img src={icon} alt="Иконка" />
            <span>{lang}</span>
        </div>
    );
};

export default LanguageDropDownItem;
