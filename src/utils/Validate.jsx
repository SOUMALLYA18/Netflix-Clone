export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[A-Za-z\s]{1,50}$/.test(name);

  if (!isEmailValid) return "Email Id not valid";
  if (!isPasswordValid) return "Password not valid";
  if (!isNameValid) return "Invalid Name";
  return null;
};
