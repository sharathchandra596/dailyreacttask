import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import HomeScreen from "./pages/HomeScreen"
import ContactScreen from "./pages/ContactScreen"
import ErrorScreen from "./pages/ErrorScreen"

function NavigationStack() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" Component={HomeScreen}/>
        <Route path="/contact" Component={ContactScreen}/>
        <Route path="*" Component={ErrorScreen}/>
        </Routes>
        </BrowserRouter>
    )
}

export default NavigationStack

