export default function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/^[a-zA-Z]+$/.test(input.username)) {
    errors.username = "Invalid Username. The Username must contain letters";
  }
  if (!input.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email)
  ) {
    // } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(input.email)) {
    errors.email = "Enter a valid email";
  }
  if (input.password.length === 0) {
    errors.password = "Enter a valid password";
  }

  return errors;
}
