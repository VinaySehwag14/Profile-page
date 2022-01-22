import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { API } from "./backend";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${API}`);
        setUser(res.data.results[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Topbar image={user} />
      <div className="container">
        <Sidebar />
        <User user={user} />
      </div>
    </>
  );
};

export default App;
