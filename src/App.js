import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/user/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
