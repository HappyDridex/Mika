import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";
import ModalBookTable from "./components/modals/ModalBookTable";
import ModalDishCard from "./components/modals/ModalDishCard";
import { yandexMetrika } from "./yandexMetrika";

function App() {
    useEffect(() => {
        yandexMetrika();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Main />}>
                        <Route path="booking" element={<ModalBookTable />} />
                        <Route path="/:dish" element={<ModalDishCard />} />
                    </Route>
                    <Route path="menu" element={<Menu />}>
                        <Route path="booking" element={<ModalBookTable />} />
                        <Route path=":dish" element={<ModalDishCard />} />
                    </Route>
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
