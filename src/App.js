import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddProducts from './Pages/Dashboard/Admin/AddProducts/AddProducts';
import ManageOrders from './Pages/Dashboard/Admin/ManageOrders/ManageOrders';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts/ManageProducts';
import ManageUser from './Pages/Dashboard/Admin/ManageUser/ManageUser';
import RequireAdmin from './Pages/Dashboard/Admin/RequireAdmin/RequireAdmin';
import RequireUser from './Pages/Dashboard/Admin/RequireUser/RequireUser';
import UpdateProducts from './Pages/Dashboard/Admin/UpdateProducts/UpdateProducts';
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
                  <Route index element={<MyProfile />} />
                  <Route
                      path="my-order"
                      element={
                          <RequireUser>
                              <MyOrders />
                          </RequireUser>
                      }
                  />
                  <Route
                      path="add-review"
                      element={
                          <RequireUser>
                              <AddReview />
                          </RequireUser>
                      }
                  />
                  <Route path="update-profile" element={<UpdateProfile />} />
                  <Route
                      path="manage-orders"
                      element={
                          <RequireAdmin>
                              <ManageOrders />
                          </RequireAdmin>
                      }
                  />
                  <Route
                      path="manage-products"
                      element={
                          <RequireAdmin>
                              <ManageProducts />
                          </RequireAdmin>
                      }
                  />
                  <Route
                      path="add-products"
                      element={
                          <RequireAdmin>
                              <AddProducts />
                          </RequireAdmin>
                      }
                  />
                  <Route
                      path="update-products/:id"
                      element={
                          <RequireAdmin>
                              <UpdateProducts />
                          </RequireAdmin>
                      }
                  />
                  <Route
                      path="manage-user"
                      element={
                          <RequireAdmin>
                              <ManageUser />
                          </RequireAdmin>
                      }
                  />
              </Route>
          </Routes>
          <ToastContainer />
      </div>
  );
}

export default App;
