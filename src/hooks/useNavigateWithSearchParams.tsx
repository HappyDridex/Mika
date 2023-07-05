import queryString from "query-string";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";

const useNavigateWithSearchParams = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse(location.search) as Record<string, string>;

    return (path: string) => {
        navigate({ pathname: path, search: createSearchParams(query).toString() });
    };
};

export default useNavigateWithSearchParams;
