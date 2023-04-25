import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
