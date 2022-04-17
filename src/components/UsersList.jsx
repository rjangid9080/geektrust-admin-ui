import Loader from "./Loader";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Users({ users, loading, deleteUser }) {
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="w-[90%] min-h-[580px]">
      <div className="w-full flex p-2 shadow-md mt-2 text-blue-600">
        <span className="w-1/4 px-4 flex items-center">
          <input className="h-5 w-5" type="checkbox" />
        </span>
        <ul className="w-3/4 flex">
          <li className="w-1/4 px-4 py-1 font-semibold">Name</li>
          <li className="w-1/4 px-4 py-1 font-semibold">Email</li>
          <li className="w-1/4 px-4 py-1 font-semibold">Role</li>
          <li className="w-1/4 px-4 py-1 font-semibold">Actions</li>
        </ul>
      </div>
      {users.map((user) => (
        <div
          className="w-full flex text-sm p-2 shadow-md mt-1 transition-all duration-500"
          key={user.id}
        >
          <span className="w-1/4 px-4 flex items-center">
            <input className="h-5 w-5" type="checkbox" />
          </span>
          <span className="w-3/4 flex">
            <input
              className="w-1/4 px-4 py-1 font-semibold outline-none"
              type="text"
              defaultValue={user.name}
              readOnly
            />
            <input
              className="w-1/4 px-4 py-1 font-semibold outline-none"
              type="text"
              defaultValue={user.email}
              readOnly
            />
            <input
              className="w-1/4 px-4 py-1 font-semibold outline-none "
              type="text"
              defaultValue={user.role}
              readOnly
            />
            <span className="flex items-center px-4 text-xl text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer">
              <FiEdit />
            </span>
            <span
              className="flex items-center px-4 text-red-500 text-2xl cursor-pointer hover:text-red-600 transition duration-300"
            >
              <MdDelete />
            </span>
          </span>
        </div>
      ))}
      <button className="mt-2 p-2 bg-red-500 hover:bg-red-600 shadow-md text-white text-xs font-semibold rounded-md transition duration-300">
        Delete Selected
      </button>
    </section>
  );
}

export default Users;
