import { ReactNode } from "react";

interface IProps {
    children?: ReactNode;
}

const BackgroundWrapper = ({ children }: IProps) => {
    return (
        <div className="flex justify-center items-start fixed z-50 left-0 top-0 w-full h-full bg-black/30 backdrop-blur-xl">
            {children}
        </div>
    );
};

export default BackgroundWrapper;
