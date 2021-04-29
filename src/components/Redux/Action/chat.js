import http from '../../Helper/http';

export const allChat = (token, data) => {
  return async (dispatch) => {
    const form = new FormData();
    Object.keys(data).forEach((key) => {
      form.append(key, data[key]);
    });
    console.log(form, '<<<<<<<<');
    try {
      dispatch({
        type: 'CHAT_MESSAGE',
        payload: '',
      });
      const results = await http(token).get('/chat', form);
      dispatch({
        type: 'ALL_CHAT',
        payload: results.data.results,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'CHAT_MESSAGE',
        payload: message,
      });
    }
  };
};

export const detailChat = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'CHAT_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/user/${id}`);
      dispatch({
        type: 'DETAIL_CHAT',
        payload: results.data.results,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'CHAT_MESSAGE',
        payload: message,
      });
    }
  };
};
