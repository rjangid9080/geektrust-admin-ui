import { useState, useEffect } from "react";
import Loader from "./Loader";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdSave } from "react-icons/md";

function Users({
  users,
  loading,
  deleteUser,
  editUser,
  saveUser,
  selectUser,
  deleteSelectedUser,
  selectAll,
  selectAllRef,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isEditUserOpen, setIsEditUserOpen] = useState(false);

  useEffect(() => {
    let isEditUser = users.filter((user) => user.edit);
    if (isEditUser.length > 0) {
      setIsEditUserOpen(true);
    } else {
      setIsEditUserOpen(false);
    }
  }, [users]);
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="w-[90%] min-h-[580px]">
      <div className="w-full flex p-2 shadow-md mt-2 text-blue-600">
        <span className="w-1/6 md:w-1/4 px-2 md:px-4 flex items-center transition duration-300">
          <input
            ref={selectAllRef}
            className="h-4 w-4 md:h-5 md:w-5"
            type="checkbox"
            onChange={selectAll}
          />
        </span>
        <ul className="w-full md:w-3/4 flex text-sm md:text-base">
          <li className="w-1/4 px-2 md:px-4 py-1 rounded-md font-semibold">
            Name
          </li>
          <li className="w-1/4 px-2 md:px-4 py-1 rounded-md font-semibold">
            Email
          </li>
          <li className="w-1/4 px-2 md:px-4 py-1 rounded-md font-semibold">
            Role
          </li>
          <li className="w-1/4 px-2 md:px-4 py-1 rounded-md font-semibold">
            Actions
          </li>
        </ul>
      </div>
      {users.length === 0 && (
        <div className="w-full flex text-sm font-semibold p-2 mt-1">
          No User Found
        </div>
      )}
      {users.map((user) => (
        <div
          className="w-full flex text-xs md:text-sm p-2 shadow-md mt-1 transition-all duration-500"
          key={user.id}
        >
          <span className="w-1/6 md:w-1/4 px-2 md:px-4 flex items-center">
            <input
              className="h-4 w-4 md:h-5 md:w-5"
              type="checkbox"
              onChange={() => selectUser(user.id)}
              checked={user.selected}
            />
          </span>
          <span className="w-full md:w-3/4 flex items-start">
            <span className="w-1/4 flex flex-col items-center">
              <input
                className={`w-[98%] px-2 md:px-4 py-1 rounded-md font-semibold outline-none ${
                  !user.edit ? "" : "border"
                } ${user.edit && !name ? `border-red-500` : ""}`}
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={user.name}
                readOnly={!user.edit}
              />
              {user.edit && !name && (
                <span className="text-xs font-semibold text-red-500">
                  Please Enter Name
                </span>
              )}
            </span>
            <span className="w-1/4 flex flex-col items-center">
              <input
                className={`w-[98%] px-2 md:px-4 py-1 rounded-md font-semibold outline-none ${
                  !user.edit ? "" : "border"
                } ${user.edit && !email ? `border-red-500` : ""}`}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={user.email}
                readOnly={!user.edit}
              />
              {user.edit && !email && (
                <span className="text-xs font-semibold text-red-500">
                  Please Enter Email
                </span>
              )}
            </span>
            <span className="w-1/4 flex flex-col items-center">
              <input
                className={`w-[98%] px-2 md:px-4 py-1 rounded-md font-semibold outline-none ${
                  !user.edit ? "" : "border"
                } ${user.edit && !role ? `border border-red-500` : ""}`}
                type="text"
                name="role"
                onChange={(e) => setRole(e.target.value)}
                defaultValue={user.role}
                readOnly={!user.edit}
              />
              {user.edit && !role && (
                <span className="text-xs font-semibold text-red-500">
                  Please Enter Role
                </span>
              )}
            </span>

            {!user.edit ? (
              <button
                disabled={isEditUserOpen ? true : false}
                onClick={() => {
                  setName(user.name);
                  setEmail(user.email);
                  setRole(user.role);
                  editUser(user.id);
                }}
                className={`flex items-center px-2 md:px-4 text-lg md:text-xl text-gray-600  transition duration-300  ${
                  isEditUserOpen
                    ? "opacity-50 cursor-no-drop"
                    : "hover:text-blue-600 cursor-pointer"
                }`}
              >
                <FiEdit />
              </button>
            ) : (
              <button
                disabled={!name || !email || !role ? true : false}
                onClick={() => saveUser(user.id, name, email, role)}
                className={`flex items-center px-2 md:px-4 text-lg md:text-xl text-green-500 hover:text-green-600 transition duration-300 cursor-pointer ${
                  !name || !email || !role ? `opacity-50` : ""
                }`}
              >
                <MdSave />
              </button>
            )}
            {!user.edit && (
              <button
                onClick={() => deleteUser(user.id)}
                className="flex items-center px-2 md:px-4 text-xl text-red-500 md:text-2xl cursor-pointer hover:text-red-600 transition duration-300"
              >
                <MdDelete />
              </button>
            )}
          </span>
        </div>
      ))}
      {users.length !== 0 && (
        <button
          onClick={deleteSelectedUser}
          className="mt-2 p-2 bg-red-500 hover:bg-red-600 shadow-md text-white text-xs font-semibold rounded-md transition duration-300"
        >
          Delete Selected
        </button>
      )}
    </section>
  );
}

export default Users;
