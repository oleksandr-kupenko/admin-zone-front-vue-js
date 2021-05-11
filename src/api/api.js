import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "@/services/tokensHandling";

import utils from "@/services/utils";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:3000",
});

export const usersAPI = {
  login(email, password) {
    return instance
      .post("/users/sign-in", { email: email, password: password })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  },

  refrehsTokens(refreshToken) {
    debugger;
    return instance
      .get("/users/refresh/token", {
        headers: { Authorization: `JWT ${refreshToken}` },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => error.response.data);
  },

  async updatePhoto(photoFile, email) {
    const photoBase64 = await utils.convertToBase64(photoFile);
    const accesToken = await getAccessToken();
    return instance
      .put(
        "/users/photo",
        { photo: photoBase64, email: email },
        {
          headers: {
            Authorization: `JWT ${accesToken}`,
          },
        }
      )
      .then((res) => res.data);
  },

  async updateProfile(userUpdateData) {
    const accesToken = await getAccessToken();
    return instance
      .put(
        "users/profile",
        {
          fname: userUpdateData.fname,
          lname: userUpdateData.lname,
          username: userUpdateData.username,
          gender: userUpdateData.gender,
          categoryId: userUpdateData.categoryId,
          country: userUpdateData.country,
          email: userUpdateData.email,
          phone: userUpdateData.phone,
          stack: userUpdateData.stack,
          rate: userUpdateData.rate,
        },
        {
          headers: {
            Authorization: `JWT ${accesToken}`,
          },
        }
      )
      .then((res) => res.data);
  },

  async getProfile() {
    const accesToken = await getAccessToken();
    return instance
      .get(`/users/profile`, {
        headers: {
          Authorization: `JWT ${accesToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  },

  async getUser(id) {
    const accesToken = await getAccessToken();
    return instance
      .get(`/users/${id}`, {
        headers: {
          Authorization: `JWT ${accesToken}`,
        },
      })
      .then((res) => res.data);
  },

  getAllCategories() {
    return instance.get(`/categories`).then((res) => res.data);
  },

  getUsersList(min, max, search, country, category, stack, sort) {
    console.log(min, max, search, country, category, stack, sort);
    return instance
      .post(`/users`, { min, max, search, country, category, stack, sort })
      .then((res) => res.data);
  },

  getCountUsers() {
    return instance.get(`/users/count`).then((res) => res.data);
  },

  deleteUser(userId) {
    return instance
      .delete(`/users`, { data: { userId: userId } })
      .then((res) => res.data);
  },

  createUser(newUser) {
    return instance
      .post(`/users/sign-up`, {
        fname: newUser.fname,
        lname: newUser.lname,
        username: newUser.username,
        email: newUser.email,
        isRequested: newUser.isRequested,
        password: newUser.password,
      })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  },

  checkUserEmail(email) {
    return instance
      .post(`/users/email`, {
        email: email,
      })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  },

  async resetPass(password, id) {
    return instance
      .put("users/pass-reset", {
        id: id,
        password: password,
      })
      .then((res) => res.data)
      .catch((error) => error.response.data);
  },
};
