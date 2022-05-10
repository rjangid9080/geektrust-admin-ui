import { useState, useEffect, useRef } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import { API } from "./api";
function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const usersPerPage = 10;
  const selectAllRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API);
        console.log(response);
        const data = response.data.map((user) => {
          user.selected = false;
          user.edit = false;
          return user;
        });
        setUsers(data);
        setResult(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrMsg(error.message);
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  const editUser = (id) => {
    let index = result.findIndex((user) => user.id === id);
    result[index].edit = !result[index].edit;
    setResult([...result]);
    setUsers([...result]);
  };

  const saveUser = (id, name, email, role) => {
    const index = result.findIndex((user) => user.id === id);
    result[index].name = name;
    result[index].email = email;
    result[index].role = role;
    result[index].edit = false;
    setResult([...result]);
    setUsers([...result]);
  };

  const deleteUser = (id) => {
    setResult(result.filter((user) => user.id !== id));
    setUsers(result.filter((user) => user.id !== id));
    selectAllRef.current.checked = false;
  };

  const selectUser = (id) => {
    const index = result.findIndex((user) => user.id === id);
    result[index].selected = !result[index].selected; //false to true
    setResult([...result]);
    setUsers([...result]);
  };

  const selectAll = () => {
    let temp = result.slice(0, usersPerPage).map((user) =>
      selectAllRef.current.checked
        ? {
            ...user,
            selected: true,
          }
        : {
            ...user,
            selected: false,
          }
    );
    let temp2 = result.slice(usersPerPage, result.length);
    setResult([...temp, ...temp2]);
    setUsers([...temp, ...temp2]);
  };

  const deleteSelectedUser = () => {
    if (selectAllRef.current.checked) {
      selectAllRef.current.checked = false;
    }
    const temp = result.filter((user) => user.selected === false);
    setResult([...temp]);
    setUsers([...temp]);
  };

  const sortByNameAscending = () => {
    const sortedUsers = result.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setResult([...sortedUsers]);
  };
  const sortByNameDecending = () => {
    const sortedUsers = result.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    setResult([...sortedUsers]);
  };
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = result.slice(indexOfFirstUser, indexOfLastUser);

  //Paginate
  const paginate = (page) => setCurrentPage(page);

  if (isError) {
    return (
      <div className="min-h-screen font-semibold flex justify-center items-center text-red-500">
        {errMsg}
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center">
      <Search users={users} setSearchResult={setResult} />
      <UsersList
        loading={loading}
        users={currentUsers}
        deleteUser={deleteUser}
        editUser={editUser}
        saveUser={saveUser}
        selectUser={selectUser}
        deleteSelectedUser={deleteSelectedUser}
        selectAll={selectAll}
        selectAllRef={selectAllRef}
        sortByNameAscending={sortByNameAscending}
        sortByNameDecending={sortByNameDecending}
      />

      <Pagination
        paginate={paginate}
        usersPerPage={usersPerPage}
        totalUsers={result.length}
      />
    </div>
  );
}

export default App;
