import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:3000",
});

export const usersAPI = {
  getProfile(userId) {
    return instance.get(`/users/${userId}`).then((res) => res.data);
  },
  getAllUsers() {
    return instance.get(`/users`).then((res) => res.data);
  },
  deleteUser(userId) {
    return instance
      .delete(`/users`, { userId: userId })
      .then((res) => res.data);
  },
  createUser(newUser) {
    return instance.post(`/users`, {
      fname: newUser.fname,
      lname: newUser.lname,
      username: newUser.username,
      categoryId: newUser.categoryId,
      country: newUser.country,
      isRequested: newUser.isRequested,
      password: newUser.password,
    });
  },
};
