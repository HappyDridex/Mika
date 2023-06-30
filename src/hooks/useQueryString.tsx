import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

type TSearchParamsKey = Record<string, any>;

export const useQueryString = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const parsedString = queryString.parse(location.search);

    const pushParams = (key: TSearchParamsKey) => {
        setSearchParams({ ...parsedString, ...key });
    };

    return { pushParams };
};
