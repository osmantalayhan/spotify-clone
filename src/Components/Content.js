import Navbar from "Components/Navbar";
import Home from "views/Home"
import Search from "views/Search"
import Collection from "views/Collection"
import { Routes, Route, Link } from "react-router-dom";

function Content() {
    return(
        <main className="flex-auto overflow-auto">
           <Navbar/>

            <div className="px-8 py-6">
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/search" element={<Search />}>
                </Route>
                <Route path="/collection" element={<Collection />}>
                </Route>
            </Routes>
            </div>

        </main>
    )
}
export default Content