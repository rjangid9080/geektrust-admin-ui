import { useRef } from "react";
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
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const roleRef = useRef(null);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className="w-[90%] min-h-[580px]">
      <div className="w-full flex p-2 shadow-md mt-2 text-blue-600">
        <span className="w-1/4 px-4 flex items-center">
          <input
            ref={selectAllRef}
            className="h-5 w-5"
            type="checkbox"
            onChange={selectAll}
          />
        </span>
        <ul className="w-3/4 flex">
          <li className="w-1/4 px-4 py-1 rounded-md font-semibold">Name</li>
          <li className="w-1/4 px-4 py-1 rounded-md font-semibold">Email</li>
          <li className="w-1/4 px-4 py-1 rounded-md font-semibold">Role</li>
          <li className="w-1/4 px-4 py-1 rounded-md font-semibold">Actions</li>
        </ul>
      </div>
      {users.length === 0 && (
        <div className="w-full flex text-sm font-semibold p-2 mt-1">
          No User Found
        </div>
      )}
      {users.map((user) => (
        <div
          className="w-full flex text-sm p-2 shadow-md mt-1 transition-all duration-500"
          key={user.id}
        >
          <span className="w-1/4 px-4 flex items-center">
            <input
              className="h-5 w-5"
              type="checkbox"
              onChange={() => selectUser(user.id)}
              checked={user.selected}
            />
          </span>
          <span className="w-3/4 flex">
            <input
              className={`w-1/4 px-4 py-1 rounded-md font-semibold outline-none ${
                !user.edit ? "" : "border"
              }`}
              type="text"
              ref={nameRef}
              name="name"
              defaultValue={user.name}
              readOnly={!user.edit}
            />
            <input
              className={`w-1/4 px-4 py-1 rounded-md font-semibold outline-none ${
                !user.edit ? "" : "border"
              }`}
              type="email"
              ref={emailRef}
              name="email"
              defaultValue={user.email}
              readOnly={!user.edit}
            />
            <input
              className={`w-1/4 px-4 py-1 rounded-md font-semibold outline-none ${
                !user.edit ? "" : "border"
              }`}
              type="text"
              ref={roleRef}
              name="role"
              defaultValue={user.role}
              readOnly={!user.edit}
            />
            {!user.edit ? (
              <span
                onClick={() => editUser(user.id)}
                className="flex items-center px-4 text-xl text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer"
              >
                <FiEdit />
              </span>
            ) : (
              <span
                onClick={() => saveUser(user.id, nameRef, emailRef, roleRef)}
                className="flex items-center px-4 text-xl text-green-500 hover:text-green-600 transition duration-300 cursor-pointer"
              >
                <MdSave />
              </span>
            )}
            <span
              onClick={() => deleteUser(user.id)}
              className="flex items-center px-4 text-red-500 text-2xl cursor-pointer hover:text-red-600 transition duration-300"
            >
              <MdDelete />
            </span>
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
