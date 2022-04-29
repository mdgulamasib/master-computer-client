import { Route, Routes } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import Register from "./Components/Authentication/Register/Register";
import Footer from "./Components/CommonSection/Footer/Footer";
import Header from "./Components/CommonSection/Header/Header";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Home from "./Components/Pages/Home/Home/Home";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Routes>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
