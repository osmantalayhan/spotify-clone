import Navigation from "./Navbar/Navigation"
import Auth from "./Navbar/Auth"
import { Routes, Route, Link } from "react-router-dom";
import Collection from "views/Collection";
import SearchTo from "./Navbar/Search";

function Navbar() {
    return(
        <nav className="h-[3.75rem] flex items-center justify-between px-8 bg-footer">
            <Navigation/>
            <Routes>
                <Route path="/" element="">
                </Route>
                <Route path="/search" element={<SearchTo/>}>
                </Route>
                <Route path="/collection" element="">
                </Route>
            </Routes>
            <Auth/>
        </nav>
    )
}

export default Navbar