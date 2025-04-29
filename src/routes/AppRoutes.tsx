import { Route, Routes } from "react-router-dom"
import Cars from "../pages/Cars"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default AppRoutes