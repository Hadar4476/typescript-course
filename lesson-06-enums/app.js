var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 5.5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 10] = "AUTHOR";
})(Role || (Role = {}));
var user = {
    name: "Hadar",
    age: 26,
    role: Role.ADMIN
};
if (user.role === Role.ADMIN) {
    console.log("".concat(user.name, " is admin"));
}
