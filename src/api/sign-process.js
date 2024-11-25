import { backendUrl } from "./axios";

export const signUp = async (user) => {
  try {
    const response = await backendUrl.post("/users/create", user);
    return response;
  } catch (error) {
    return error;
  }
};

export const signIn = async (token) => {
  try {
    const response = await backendUrl.post(
      "/login",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `basic ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
