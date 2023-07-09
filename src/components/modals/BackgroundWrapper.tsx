import { ReactNode, useEffect } from "react";

interface IProps {
    children?: ReactNode;
    onClick?(): void;
    className?: string;
}

const BackgroundWrapper = ({ children, onClick, className }: IProps) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            className={`fixed left-0 top-0 z-50 flex h-full w-full items-start justify-center bg-black/80 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default BackgroundWrapper;
