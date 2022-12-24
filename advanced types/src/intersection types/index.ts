type Job1 = {
  title: string;
  salary: number;
  startDate: Date;
};

type School = {
  name: string;
  endDate: Date;
};

type Person1 = Job1 & School;

const person1: Person1 = {
  title: "Nurse",
  salary: 10000,
  startDate: new Date("01-12-2022"),
  name: "Some school",
  endDate: new Date(),
};

interface House {
  city: string;
  street: string;
  number: number;
}

interface Car {
  model: string;
  price: number;
  boughtAt: Date;
}

interface Person2 extends House, Car {}

const person2: Person2 = {
  city: "Lod",
  street: "Some street",
  number: 10,
  model: "Mazda",
  price: 12000,
  boughtAt: new Date("02-11-2020"),
};
