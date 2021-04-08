export const required = (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
};

export const confirmed = (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true;
  }
  return "Passwords must match";
};

export const passStronged = (value) => {
  const mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))"
  );
  if (mediumPassword.test(value)) {
    return true;
  }
  return "Password is too simple";
};
