import { ReactNode } from "react";

interface IProps {
    children?: ReactNode;
    onClick?(): void;
    className?: string;
}

const BackgroundWrapper = ({ children, onClick, className }: IProps) => {
    return (
        <div
            className={`flex justify-center items-start fixed z-50 left-0 top-0 w-full h-full bg-black/80 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default BackgroundWrapper;
