export default function SearchUsers(value, users) {
  const search = value.toLowerCase();
  const searchedUsers = users.filter((user) => {
    if (search !== "") {
      return user.name.toLowerCase().includes(search);
    } else {
      return user;
    }
  });
  return searchedUsers;
}
