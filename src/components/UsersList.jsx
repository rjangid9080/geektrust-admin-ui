import Loader from "./Loader";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Users({ users, loading }) {
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="w-full">
      <div className="w-full flex border border-b border-gray-200 p-2">
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
          className="w-full flex border border-b border-gray-200 p-2"
          key={user.id}
        >
          <span className="w-1/4 px-4 flex items-center">
            <input className="h-5 w-5" type="checkbox" />
          </span>
          <span className="w-3/4 flex">
            <input
              className="w-1/4 px-4 py-1"
              type="text"
              defaultValue={user.name}
              readOnly
            />
            <input
              className="w-1/4 px-4 py-1"
              type="text"
              defaultValue={user.email}
              readOnly
            />
            <input
              className="w-1/4 px-4 py-1 "
              type="text"
              defaultValue={user.role}
              readOnly
            />
            <span className="flex items-center px-4 text-xl text-gray-600 hover:text-black cursor-pointer">
              <FiEdit />
            </span>
            <span className="flex items-center px-4 text-red-500 text-2xl cursor-pointer hover:text-red-600">
              <MdDelete />
            </span>
          </span>
        </div>
      ))}
    </section>
  );
}

export default Users;
