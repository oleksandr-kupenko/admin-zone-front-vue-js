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
    "((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))|((?=.*[A-Z])(?=.*[0-9])(?=.{6,}))"
  );
  if (mediumPassword.test(value)) {
    return true;
  }
  return "Password is too simple";
};

export const email = (value) => {
  const validEmail = /\S+@\S+\.\S+/;
  if (validEmail.test(value)) {
    return true;
  }
  return "This field must be a valid email";
};

export const confirmedChecbox = (value, checkboxCount) => {
  if (value?.length === checkboxCount) {
    return true;
  }
  return "You must accept all agreements";
};

export const name = (value) => {
  const valid = /^[a-zA-Z0-9]+$/;
  if (valid.test(value)) {
    return true;
  }
  return "You can only use latin letters and numbers";
};

export const username = (value) => {
  const valid = /^[a-zA-Z]|\d+[-_.]$/;
  if (valid.test(value) && value.length) {
    return true;
  }
  return "You can only use latin letters, numbers, hyphen and underscore";
};

export const minMaxLength = (value, [min, max]) => {
  if (value.length < min) {
    return `This field must be minimum ${min} characters`;
  }
  if (value.length > max) {
    return `This field must be maximum ${max} characters`;
  }
  return true;
};

export const notCyrillic = (value) => {
  const valid = /[а-яА-Яі]/;
  if (!valid.test(value) && value.length) {
    return true;
  }
  return "You can't use cyrillic letters";
};
