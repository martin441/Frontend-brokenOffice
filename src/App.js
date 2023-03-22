import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import SignInSide from "./components/Login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile/>}/>
        <Route path="/login" element={<SignInSide/>}/>
      </Routes>
    </div>
  );
}

export default App;
