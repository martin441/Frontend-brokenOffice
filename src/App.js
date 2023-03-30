import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router";
import { Profile } from "./components/Profile";
import { UserHome } from "./components/Home/User";
import SignInSide from "./components/Login";
import { ReportMenu } from "./components/Service/ReportMenu";
import { AdminView } from "./components/Admin/Users";
import OfficeList from "./components/Admin/Offices/OfficeList";
import { Toaster } from "react-hot-toast";
import { RegisterUsers } from "./components/Admin/Users/RegisterUsers";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import { OfficeAdd } from "./components/Admin/Offices/Add";
import NotFoundPage from "./components/NotFoundPage/NotFound";
import checkType from "./utils/checkType";
import { setOffices } from "./state/office";
import { Home } from "./components/Home/Home";
import { ServiceHome } from "./components/Home/Service";
import { AdminHome } from "./components/Home/Admin";
import NewTicketForm from "./components/Home/User/NewTicket";
import { LoginProtectedRoute } from "./commons/LoginProtectedRoute";


function App() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${ROUTE}/user/me`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => dispatch(setUser(data)));
    axios
      .get(`${ROUTE}/offices`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => dispatch(setOffices(data)));
  }, [ROUTE, dispatch]);
  const user = useSelector((state) => state.user);
  const initialized = user !== null;

  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignInSide />} />

        {checkType(user.type) === 404 && <Route path="/" element={<Home />} />}

        {checkType(user.type) === 21 && (
          <Route path="/" element={<UserHome />} />
        )}

        {checkType(user.type) === 21 && (
          <Route path="/user/new-ticket" element={<NewTicketForm />} />
        )}

        {checkType(user.type) === 14 && (
          <Route path="/" element={<ServiceHome />} />
        )}

        {checkType(user.type) === 66 && (
          <Route path="/" element={<AdminHome />} />
        )}

        <Route
          path="/user/profile"
          element={
            initialized ? (
              <LoginProtectedRoute user={user} redirectTo="/login">
                <Profile />
              </LoginProtectedRoute>
            ) : null
          }
        />

        {(checkType(user.type) === 14 ||
          checkType(user.type) === 66 ||
          checkType(user.type) === 32) && (
          <Route path="/service/report/all" element={<ReportMenu />} />
        )}
        {(checkType(user.type) === 66 || checkType(user.type) === 32) && (
          <Route path="/admin/users" element={<AdminView />} />
        )}
        {(checkType(user.type) === 66 || checkType(user.type) === 32) && (
          <Route path="/admin/offices" element={<OfficeList />} />
        )}
        {(checkType(user.type) === 66 || checkType(user.type) === 32) && (
          <Route path="/admin/offices/register" element={<OfficeAdd />} />
        )}
        {(checkType(user.type) === 66 || checkType(user.type) === 32) && (
          <Route path="/admin/users/register" element={<RegisterUsers />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
