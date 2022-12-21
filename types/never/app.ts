const format = (value: string | number) => {
  if (typeof value === "string") {
    return value.substring(-2);
  } else if (typeof value === "number") {
    return value.toLocaleString();
  }

  return value; // "value" is inferref as "never" type.
};

const genError = (message: string): never => {
  // ERROR: because this function have a reachable end point.
  if (1 < 0) {
    throw new Error(message);
  }
};
