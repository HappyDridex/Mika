import { useEffect } from "react";

const useEscapeKey = (onClose: Function) => {
    useEffect(() => {
        const handleEscapeKey = (evt: KeyboardEvent): void => {
            if (evt.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keyup", handleEscapeKey);
        return () => {
            document.removeEventListener("keyup", handleEscapeKey);
        };
    }, [onClose]);
};

export default useEscapeKey;
