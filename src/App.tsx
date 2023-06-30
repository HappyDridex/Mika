import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Main />} />
                    <Route path="menu" element={<Menu />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
