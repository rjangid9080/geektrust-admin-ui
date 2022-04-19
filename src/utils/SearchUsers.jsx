export default function SearchUsers(value, users) {
  const search = value.toLowerCase();
  if (search !== "") {
    const searchedUsers = users.filter((user) => {
      return Object.values(user)
        .slice(1, user.length)
        .join("")
        .toLowerCase()
        .includes(search);
    });
    return searchedUsers;
  } else {
    return users;
  }
}
