import queryString from "query-string";
import { useLocation } from "react-router-dom";

export const useArrayFilter = () => {
    const location = useLocation();
    const parsedString = queryString.parse(location.search);

    const filterByQueryKey = (arr: any[], ...sortKeys: string[]) => {
        return arr.filter((el) => {
            let match = true;
            sortKeys.forEach((key) => {
                if (parsedString[key] === "all") return true;
                if (el[key] !== parsedString[key]) {
                    match = false;
                    return;
                }
            });
            return match;
        });
    };

    return { filterByQueryKey };
};
