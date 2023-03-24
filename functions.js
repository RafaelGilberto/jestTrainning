const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  banana() {
    return "banana";
  },
  createUser: () => {
    const user = { firstName: "Rafael" };
    user["lastName"] = "Lima";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
