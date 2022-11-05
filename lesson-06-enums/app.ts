enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 5.5,
  AUTHOR = 10,
}

const user = {
  name: "Hadar",
  age: 26,
  role: Role.ADMIN,
};

if (user.role === Role.ADMIN) {
  console.log(`${user.name} is admin`);
}
