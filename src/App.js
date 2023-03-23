import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import SignInSide from "./components/Login";
import { ReportMenu } from "./components/Service/ReportMenu";
import { AdminView } from "./components/Admin";
import { RegisterUsers } from "./components/Admin/RegisterUsers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/service/report/all" element={<ReportMenu />} />
        <Route path="/admin/users" element={<AdminView />} />
        <Route path="/admin/users/register" element={<RegisterUsers />} />
      </Routes>
    </div>
  );
}

export default App;
