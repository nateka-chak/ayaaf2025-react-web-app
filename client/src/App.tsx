import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Packages from "./pages/Packages";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Layout from "./components/Layout";
import useAuth from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import PaymentDetails from "./pages/PaymentDetails";
import Packages from "./components/Packages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <PaymentDetails />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default App;
