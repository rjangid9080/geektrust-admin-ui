
import Loader from "./Loader";
function Users({users,loading}) {
  
  return (
    <div className="w-full text-blue-500">
      {loading && <Loader />}
      {users.map((user) => (
        <ul className="w-full flex text-black" key={user.id}>
          <li className="w-1/3 flex justify-start">{user.name}</li>
          <li className="w-1/3 flex justify-start">{user.email}</li>
          <li className="w-1/3 flex justify-start">{user.role}</li>
        </ul>
      ))}
    </div>
  );
}

export default Users;
