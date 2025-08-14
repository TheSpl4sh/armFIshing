import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YandexAuth from "./pages/YandexAuth";
import AllUsersPage from "./pages/AllUsersPage";
import FirstPage from "./pages/FirstPage";

const App = () => {
    

    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/AllUsersPage" element={<AllUsersPage />} />
            </Routes>
        </Router>
    )
}

export default App