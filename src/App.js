import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile/UpdateProfile';
import Home from './Pages/Home/Home/Home';
import Purchase from './Pages/Home/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';
import Navbar from './Pages/Sheard/Navbar';


function App() {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route
                  path="/purchase/:id"
                  element={
                      <RequireAuth>
                          <Purchase />
                      </RequireAuth>
                  }
              />
              <Route
                  path="/dashboard"
                  element={
                      <RequireAuth>
                          <Dashboard />
                      </RequireAuth>
                  }
              >
                  <Route index element={<MyOrders />} />
                  <Route path="add-review" element={<AddReview />} />
                  <Route path="profile" element={<MyProfile />} />
                  <Route path="update-profile" element={<UpdateProfile />} />
              </Route>
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
