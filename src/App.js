import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import Footer from "./Components/CommonSection/Footer/Footer";
import Header from "./Components/CommonSection/Header/Header";
import NotFound from "./Components/CommonSection/NotFound/NotFound";
import About from "./Components/Pages/About/About";
import AddNewItems from "./Components/Pages/AddNewItems/AddNewItems";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home/Home";
import ManageInventory from "./Components/Pages/ManageInventory/ManageInventory";
import MyItems from "./Components/Pages/MyItems/MyItems";
import UpdateItems from "./Components/Pages/UpdateItemData/UpdateItems/UpdateItems";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/updateitems/:itemId" element={<RequireAuth><UpdateItems></UpdateItems></RequireAuth>}></Route>

        <Route path="/addnewitem" element={<RequireAuth><AddNewItems></AddNewItems></RequireAuth>}></Route>

        <Route path="/myitems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>

        <Route path="/manageinventory" element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>

        <Route path="/blog" element={<Blogs />}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
