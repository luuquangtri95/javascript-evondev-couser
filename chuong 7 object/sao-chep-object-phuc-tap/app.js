const user = {
  name: 'tri',
  school: {
    name: 'spkt',
    room: {
      name: 'IT',
      isDev: true,
    },
  },
};

// const newUser = Object.assign({}, user);
// console.log(newUser);

const newUser3 = JSON.parse(JSON.stringify(user)); // clone nested object
