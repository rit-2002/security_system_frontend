import { axiosAPI } from "./axiosInstance";

const API_BASE_URL = '/auth';

export const login = async (username, password, captchaValue) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('g-recaptcha-response', captchaValue);

    const response = await axiosAPI.post(`${API_BASE_URL}/login/token`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosAPI.post(`${API_BASE_URL}/login/`);
    return response;
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};

export const validateToken = async () => {
  try {
    const response = await axiosAPI.get(`${API_BASE_URL}/validate`);
    return response;
  } catch (error) {
    console.error('Error validating token:', error.response.data.detail);
    throw error;
  }
};
