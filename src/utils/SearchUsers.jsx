export default function SearchUsers(value, users) {
  const searchedUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  return searchedUsers;
}
