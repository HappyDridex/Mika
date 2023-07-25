import { AiFillPhone } from "react-icons/ai";

interface IProps {
    className?: string;
}

const CallUsButton = ({ className }: IProps) => {
    return (
        <a
            href="tel:+37493129492"
            className={`flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-white/5 md:hidden ${className}`}
        >
            <AiFillPhone className="w-[30px] text-white" />
        </a>
    );
};

export default CallUsButton;
