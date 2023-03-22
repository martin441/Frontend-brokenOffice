import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
