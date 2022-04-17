import { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const API =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(API);
      setUsers(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //Paginate
  const paginate = (page) => setCurrentPage(page);
  return (
    <div className="w-full flex flex-col items-center">
      <Search users={users} setUsers={setUsers} />
      <UsersList loading={loading} users={currentUsers} />
      <Pagination
        paginate={paginate}
        usersPerPage={usersPerPage}
        totalUsers={users.length}
      />
    </div>
  );
}

export default App;
