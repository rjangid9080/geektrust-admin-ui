export default function SearchUsers(value, users) {
  const search = value.toLowerCase();
  if (search !== "") {
    const searchedUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.role.toLowerCase().includes(search)
      );
    });
    return searchedUsers;
  } else {
    return users;
  }
}
