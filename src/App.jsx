import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <User />
      </div>
    </>
  );
};

export default App;
