import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";
// import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    // <Routes>
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <User />
        {/* <Route path="/" element={<User />} /> */}
      </div>
      {/* </Routes> */}
    </>
  );
};

export default App;
