// typeof
type Combinable1 = string | number;

const add = (num1: Combinable1, num2: Combinable1) => {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return num1.toString() + num2.toString();
  }

  return num1 + num2;
};

// property checking("property" in object):
type Admin = {
  name: string;
  permissions: string[];
};

type User1 = {
  name: string;
};

type Player = Admin | User1;

const printPlayerInfo = (player: Player) => {
  console.log({ player });

  // INVALID: "permissions" might not be on this object
  console.log({ permissions: player.permissions });

  // INVALID: check like that is not allowed by TS
  if (player.permissions) {
    console.log({ permissions: player.permissions });
  }

  // VALID:
  if ("permissions" in player) {
    console.log({ permissions: player.permissions });
  }
};

// instanceof:
class Cat {
  breath() {
    console.log("Cat is breathing...");
  }

  meow() {
    console.log("Cat is meowing");
  }
}

class Dog {
  breath() {
    console.log("Dog is breathing...");
  }

  bark() {
    console.log("Dog is barking...");
  }
}

type Pet = Cat | Dog;

const cat = new Cat();
const dog = new Dog();

const walkPet = (pet: Pet) => {
  console.log({ pet });
  console.log({ breathing: pet.breath() });

  // INVALID: "permissions" might not be on this object
  console.log({ bark: pet.bark() });

  // VALID: propert check
  if ("meow" in pet) {
    console.log({ meow: pet.meow() });
  }

  // VALID: checking pet's instance
  if (pet instanceof Dog) {
    console.log({ bark: pet.bark() });
  }
};
