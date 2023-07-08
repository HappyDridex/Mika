import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import ModalBookTable from "./components/modals/ModalBookTable";
import ModalDishCard from "./components/modals/ModalDishCard";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            {/* <ScrollToTop /> */}
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
