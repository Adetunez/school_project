import api from "../API";
import { removeStoredAuthToken, storeAuthToken } from "../utils";

class USER {
  //login user
  user_login = async (data) => {
    try {
      const response = await api.post("/user/login", data);

      if (response?.status && response.token) {
        removeStoredAuthToken();
        storeAuthToken(response.token);
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };
  //signup new user
  user_signup = async (data) => {
    try {
      const response = await api.post("/user/register", data);
      if (response?.status) {
        removeStoredAuthToken();
        storeAuthToken(response.token);
        return response;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  //reset password
  user_reset = async (data) => {
    try {
      const response = await api.post("/user/reset-password", data);
      return response;
    } catch (error) {
      return error;
    }
  };
  //
  user_change_password = async (data, token) => {
    try {
      const response = await api.put(
        `/user/reset-password?token=${token}`,
        data
      );
      return response;
    } catch (error) {
      return error;
    }
  };
  user_verify_account = async (data) => {
    try {
      const response = await api.post(`/user/verify-account`, data);
      return response;
    } catch (error) {
      return error;
    }
  };
  user_add_product = async (data) => {
    try {
      const response = await api.post(`/add-product`, data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  get_all_users = async (page) => {
    try {
      const response = await api.get(`/get/all-users?page=${page}`);
      return response;
    } catch (error) {
      return error;
    }
  };

  get_all_records = async (page) => {
    try {
      const response = await api.get(`/get/all-records?page=${page}`);
      return response;
    } catch (error) {
      return error;
    }
  };

  get_all_products = async (page) => {
    try {
      const response = await api.get(`/get/all-products?page=${page}`);
      return response;
    } catch (error) {
      return error;
    }
  };
  get_product = async (page, id) => {
    try {
      const response = await api.get(
        `/get/product?page=${page}&farmerId=${id}`
      );
      return response;
    } catch (error) {
      return error;
    }
  };
  edit_product = async (id) => {
    try {
      const response = await api.post(`/edit/product`, { id });
      return response;
    } catch (error) {
      return error;
    }
  };
  delete_product = async (id) => {
    try {
      const response = await api.post(`/delete/product`, id);
      return response;
    } catch (error) {
      return error;
    }
  };
  get_search_product = async (page, filters) => {
    try {
      const response = await api.get(`/search/${page}/?${filters}`);
      return response;
    } catch (error) {
      return error;
    }
  };
}

const userOBJ = new USER();
export default userOBJ;
