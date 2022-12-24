// Declaring an interface which should hold all properties as strings only and their values will be strings only

interface Errors {
  [prop: string]: string; // Can work with union types
}

const errors: Errors = {
  email: "Email not valid",
  username: "Username not valid",
  age: 26, // ERROR: because it only accepts strings
};
