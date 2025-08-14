import { HashRouter, Routes, Route } from "react-router-dom";
import AllUsersPage from "./pages/AllUsersPage";
import FirstPage from "./pages/FirstPage";

const App = () => {
    return (
    <HashRouter>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/AllUsersPage" element={<AllUsersPage />} />
            </Routes>
    </HashRouter>
    )
}

export default App