import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(url);
      setUsers(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return <div className="w-full text-blue-500">{loading && <Loader />}</div>;
}

export default App;
