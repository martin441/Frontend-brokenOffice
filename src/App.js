import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import SignInSide from "./components/Login";
import { ReportMenu } from "./components/Service/ReportMenu";
import { AdminView } from "./components/Admin";
import OfficeList from "./components/Admin/Offices/OfficeList";
import { Toaster } from "react-hot-toast";
import { RegisterUsers } from "./components/Admin/RegisterUsers";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./state/user";
import { OfficeAddForm } from "./components/Admin/Offices/Add/OfficeAddForm";
import { OfficeAdd } from "./components/Admin/Offices/Add";
import NotFoundPage from "./components/NotFoundPage/NotFound";
import checkType from "./utils/checkType";

function App() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${ROUTE}/user/me`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => dispatch(setUser(data)));
  }, [ROUTE, dispatch]);
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/login" element={<SignInSide />} />
        {checkType(user.type) === 14 && (
          <Route path="/service/report/all" element={<ReportMenu />} />
        )}
        {checkType(user.type) === 66 && (
          <Route path="/admin/users" element={<AdminView />} />
        )}
        {checkType(user.type) === 32 && (
          <Route path="/admin/users" element={<AdminView />} />
        )}
        {checkType(user.type) === 66 && (
          <Route path="/admin/offices" element={<OfficeList />} />
        )}
        {checkType(user.type) === 66 && (
          <Route path="/admin/offices/register" element={<OfficeAdd />} />
        )}
        {checkType(user.type) === 66 && (
          <Route path="/admin/users/register" element={<RegisterUsers />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
