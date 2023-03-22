import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";
import SignInSide from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/user/profile" element={<Profile/>}/>
        <Route path="/login" element={<SignInSide/>}/>
      </Routes>
    </div>
  );
}

export default App;
