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
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import { OfficeAdd } from "./components/Admin/Offices/Add";


function App() {
  const ROUTE = process.env.REACT_APP_ROUTE;
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(`${ROUTE}/user/me`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => dispatch(setUser(data)));
  }, [ROUTE, dispatch])

  return (
    <div className="App">
      <div><Toaster/></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/service/report/all" element={<ReportMenu />} />
        <Route path="/admin/users" element={<AdminView />} />
        <Route path="/admin/offices" element={<OfficeList />} />
        <Route path="/admin/offices/register" element={<OfficeAdd />} />
        <Route path="/admin/users/register" element={<RegisterUsers />} />
      </Routes>
    </div>
  );
}

export default App;
