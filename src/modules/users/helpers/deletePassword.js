
module.exports = (user) => {
  const userDeletePw = {
    ...user,
  };
  return delete userDeletePw.password;
};
