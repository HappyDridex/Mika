interface IProps {
    onInput(str: string, ...args: any): void;
    value?: string;
    placeholder?: string;
    className?: string;
    onlyNumbers?: boolean;
    inputMask?: string;
}

const InputField = ({ className, value, placeholder, onInput, onlyNumbers, inputMask }: IProps) => {
    function validateOutputText(inputText: string) {
        const outputText = onlyNumbers ? inputText.replace(/[^0-9()-]/g, "") : inputText;
        onInput(outputText);
    }

    function makeInputMask(value: string) {
        if (!inputMask) return;
        const mask = inputMask;
        return value ? mask + value.replace(mask, "") : "";
    }

    return (
        <div>
            <input
                onInput={(evt) => validateOutputText((evt.target as HTMLInputElement).value)}
                {...(value === undefined ? {} : { value: inputMask ? `${makeInputMask(value)}` : value })}
                placeholder={placeholder}
                className={`${className} w-full rounded-full border border-gray68 bg-transparent px-4 py-[8px] text-base text-white outline-none placeholder:text-gray68 focus:border-white md:px-[30px] md:py-[12px] md:text-xl`}
                type="text"
            />
        </div>
    );
};

export default InputField;
