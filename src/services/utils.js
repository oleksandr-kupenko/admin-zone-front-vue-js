var utils = {
  passStrengthLevel(password) {
    const mediumPassword = new RegExp(
      "((?=.*[a-z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{6,}))|((?=.*[A-Z])(?=.*[0-9])(?=.{6,}))"
    );
    const strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );

    switch (true) {
      case strongPassword.test(password):
        return 3;
      case mediumPassword.test(password):
        return 2;
      case password.length > 0:
        return 1;
    }
  },

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  },

  getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          //eslint-disable-next-line
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  },
};

export default utils;
