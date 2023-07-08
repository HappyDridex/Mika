import { useState } from "react";

interface IProps {
    onInput(str: string, ...args: any): void;
    placeholder?: string;
    className?: string;
}

const InputField = ({ className, placeholder, onInput }: IProps) => {
    return (
        <div>
            <input
                onInput={(evt) => onInput((evt.target as HTMLInputElement).value)}
                placeholder={placeholder}
                className={`${className} w-full rounded-full border border-gray68 bg-transparent px-4 py-[8px] text-base text-white outline-none placeholder:text-gray68 focus:border-white md:px-[40px] md:py-[12px] md:text-xl`}
                type="text"
            />
        </div>
    );
};

export default InputField;
