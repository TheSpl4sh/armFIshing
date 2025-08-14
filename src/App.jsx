import { HashRouter as Router, Routes, Route } from "react-router-dom";
import YandexAuth from "./pages/YandexAuth";
import AllUsersPage from "./pages/AllUsersPage";
import FirstPage from "./pages/FirstPage";

const App = () => {
    

    return (
        <HashRouter>
            <Routes>
                <Route path="/armFIshing/" element={<FirstPage />} />
                <Route path="/armFIshing/AllUsersPage" element={<AllUsersPage />} />
            </Routes>
        </HashRouter>
    )
}

export default App