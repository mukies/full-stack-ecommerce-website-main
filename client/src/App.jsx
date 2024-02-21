/** @format */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Pnf from "./pages/PageNotFound.jsx";
import Privacy from "./pages/Privacy.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";
import AdminRoute from "./component/admin/AdminRoute.jsx";
// import AllUsers from "./pages/admin/AllUsers.jsx";
import Cart from "./pages/Cart.jsx";
import Dashboard from "./pages/users/Dashboard.jsx";
import Menus from "./component/admin/Menu.jsx";
import EditCategory from "./pages/admin/EditCategory.jsx";
import AddCategory from "./pages/admin/AddCategory.jsx";
import AddProduct from "./pages/admin/AddProduct.jsx";
import EditProduct from "./pages/admin/EditProduct.jsx";
import Category from "./pages/Category.jsx";
import SingleCategory from "./pages/SingleCategory.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<SingleCategory />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        {/*user routes*/}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/*admin routes*/}
        <Route element={<AdminRoute />}>
          <Route path="/admin-dashboard" element={<Menus />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/category/:id" element={<EditCategory />} />
          <Route path="/product/edit/:slug" element={<EditProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        {/*page not found routes*/}
        <Route path="*" element={<Pnf />} />
      </Routes>
    </div>
  );
}

export default App;
