const users = [
  { name: "A", createdAt: "2024-12-01" },
  { name: "B", createdAt: "2025-01-15" },
  { name: "C", createdAt: "2025-01-25" }
];

function getUsersLast30Days(users) {
  const now = new Date();
  const last30Days = new Date();
  last30Days.setDate(now.getDate() - 30);

  return users.filter(user => {
    return new Date(user.createdAt) >= last30Days;
  });
}

console.log(getUsersLast30Days(users));