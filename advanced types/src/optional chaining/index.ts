type Job2 = {
  title: string;
  description: string;
};

type User2 = {
  id: string;
  name: string;
  job?: Job2;
};

const user: User2 = {
  id: "8699377",
  name: "Hadar",
  job: {
    title: "Developer",
    description: "I develop things",
  },
};

console.log(user?.job?.title);
