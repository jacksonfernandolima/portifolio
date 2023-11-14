import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";

function AppsRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/contatos" element={<Contatos />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppsRoutes;