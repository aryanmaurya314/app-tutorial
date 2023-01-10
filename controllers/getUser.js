

const getUser = (req, res) => {

  // const user = db call 
  res.status(200).json({
    name: "Jitendra Maurya",
    age: 99,
    profession: "Software developer",
  });
};

module.exports = getUser;
