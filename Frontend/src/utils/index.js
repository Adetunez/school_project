import SecureLS from "secure-ls";
let ls = new SecureLS({ encodingType: "rc4", isCompression: true });

export const getStoredAuthToken = () => ls.get("token");
export const getClient = () => {
  let user = atob(getStoredAuthToken().split(".")[1]);
  console.log(user);
  return JSON.parse(user).user ? JSON.parse(user).user : JSON.parse(user);
};
export const storeAuthToken = (token) => ls.set("token", token);

export const removeStoredAuthToken = () => {
  ls.remove("token");
};
