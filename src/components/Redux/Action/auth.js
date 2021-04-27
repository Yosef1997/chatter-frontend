import http from '../../Helper/http';
import jwt from 'jwt-decode';

export const signup = (data) => {
  return async (dispatch) => {
    const params = new FormData();
    Object.keys(data).forEach((key) => {
      params.append(key, data[key]);
    });
    // params.append('picture', picture);
    // params.append('name', name);
    // params.append('password', password);
    // params.append('phone', phone);
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().post('/auth/sign-up', params);
      dispatch({
        type: 'SIGN_UP',
        payload: results.data.result,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const dataRegister = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      dispatch({
        type: 'DATA_REGISTER',
        payload: data,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const signin = (phone) => {
  return async (dispatch) => {
    const params = new URLSearchParams();
    params.append('phone', phone);
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().post('/auth/sign-in', params);
      const token = results.data.results.token;
      const user = jwt(token);
      dispatch({
        type: 'SIGN_IN',
        payload: token,
        user: user,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const updateUser = (token, data) => {
  return async (dispatch) => {
    try {
      const form = new FormData();
      Object.keys(data).forEach((key) => {
        form.append(key, data[key]);
      });
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http(token).patch('/user', form);
      dispatch({
        type: 'UPDATE_USER',
        payload: results.data.results,
        message: results.data.message,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const deletePicture = (token, data) => {
  return async (dispatch) => {
    try {
      const form = new FormData();
      Object.keys(data).forEach((key) => {
        form.append(key, data[key]);
      });
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http(token).delete('/user', form);
      dispatch({
        type: 'DELETE_PICTURE',
        payload: results.data.results,
        message: results.data.message,
      });
    } catch (err) {
      console.log(err);
      const {message} = err.response.data;

      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message,
      });
    }
  };
};

export const signout = () => ({
  type: 'SIGN_OUT',
});
