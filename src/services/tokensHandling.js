import { usersAPI } from "@/api/api";
import router from "@/router";
import utils from "@/services/utils";

export const saveTokens = (tokens) => {
  document.cookie = `tokens=${JSON.stringify(tokens)}; expires=${new Date(
    tokens.refreshTokenExpirationDate
  )}; path=/`;
};

export const killTokens = () => {
  document.cookie = "tokens=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  router.push("/");
};

const refreshTokens = async (refreshToken) => {
  const newTokens = await usersAPI.refrehsTokens(refreshToken);
  if (newTokens) {
    await saveTokens(newTokens);
    return newTokens.accessToken;
  } else {
    return router.push("/");
  }
};

export const getAccessToken = async () => {
  if (utils.getCookie("tokens")) {
    const tokens = JSON.parse(utils.getCookie("tokens"));
    if (tokens?.accessTokenExpirationDate > Date.now()) {
      return tokens.accessToken;
    }
    if (tokens?.refreshTokenExpirationDate > Date.now()) {
      return await refreshTokens(tokens.refreshToken);
    }
  }
  return router.push("/");
};
