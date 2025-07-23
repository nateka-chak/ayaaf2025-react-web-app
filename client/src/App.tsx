import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Packages from "./pages/Packages";
import Cart from "./pages/Cart";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Layout from "./components/Layout";
// import useAuth from "./context/AuthContext";
// import { Navigate } from "react-router-dom";
import PaymentDetails from "./pages/PaymentDetails";
import Packages from "./components/Packages";
import RegisterMember from "./pages/RegisterMember";
import RegisterNonMember from "./pages/RegisterNonMember";
import RegisterDelegate from "./pages/RegisterDelegate";
import RegisterExhibitor from "./pages/RegisterExhibitor";


// Main App component that defines all routes
function App() {
  return (
    // Define all routes for the application
    <Routes>
      {/* Layout wraps all pages with common UI (e.g., Navbar, Footer) */}
      <Route element={<Layout />}>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* Packages page route */}
        <Route path="/packages" element={<Packages />} />
        {/* Cart page route */}
        <Route path="/cart" element={<Cart />} />
        {/* Payment details page, now accessible without login */}
        <Route path="/payment" element={<PaymentDetails />} />
        {/* Admin dashboard page */}
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Registration and Login routes removed for open access */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register-member" element={<RegisterMember />} />
<Route path="/register-non-member" element={<RegisterNonMember />} />
<Route path="/register-delegate" element={<RegisterDelegate />} />
<Route path="/register-exhibitor" element={<RegisterExhibitor />} />
    
      </Route>
    </Routes>
  );
}

// ProtectedRoute removed since all pages are now public

export default App;