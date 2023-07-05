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
                onInput={(evt) =>
                    onInput((evt.target as HTMLInputElement).value)
                }
                placeholder={placeholder}
                className={`${className} w-full py-[12px] px-[40px] bg-transparent border border-gray68 rounded-[50px] text-xl text-white placeholder:text-gray68 outline-none focus:border-white`}
                type="text"
            />
        </div>
    );
};

export default InputField;
