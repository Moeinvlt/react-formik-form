import { Route, Routes } from "react-router";
import RegisterForm from "../../components/registerForm";
import LoginForm from "../../components/loginForm";
import MainPage from "../../components/mainPage";

const Content = () => {
    return(
        <main>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </main>
    )
}

export default Content;