import {BrowserRouter as Router, Routes, Route} from "react-router"
import NavbarC from "./components/navbar/NavbarC"
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"
import ProductDetailpage from "./pages/ProductDetailPage"
import Adminpage from "./pages/Adminpage"
import Userpage from "./pages/Userpage"
import AboutUspage from "./pages/AboutUspage"
import Contactpage from "./pages/Contactpage"
import Registerpage from "./pages/Registerpage"
import Error404 from "./pages/Error404"
import FooterC from "./components/footer/FooterC"


const App = () => {
    return(
        <>
        <Router>
            <NavbarC/>
            <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Loginpage/>} />
            <Route path="/productDetail/:id" element={<ProductDetailpage/>} />
            <Route path="/admin" element={<Adminpage/>} />
            <Route path="/user" element={<Userpage/>}/>
            <Route path="/aboutus" element={<AboutUspage/>}/>
            <Route path="/contactos" element={<Contactpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route path="*" element={<Error404/>}/>
            </Routes>
            <FooterC/>
        </Router>
        </>
    )
}

export default App