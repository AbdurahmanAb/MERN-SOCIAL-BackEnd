const User = require("../models/User");
exports.validtaeEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

exports.validateLength = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

exports.validateUsername = async (username) => {
  let taken = false;

  do {
    let checkUsername = await User.findOne({ username });
    if (checkUsername) {
      let num = Math.round(Math.random() * 100).toString();
      username += num;
      taken = true;
    } else {
      taken = false;
    }
  } while (taken);
  return username;
};
