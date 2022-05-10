import { BrowserRouter, Route, Routes } from "react-router-dom";

import "../styles/App.scss";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Conversation from "./pages/Conversation";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={<Login/>}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp/>}
                    />
                    <Route
                        path="/messages"
                        element={<Conversation/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
