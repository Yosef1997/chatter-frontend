import http from '../../Helper/http';

export const detailChatUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http().get(`/user/${id}`);
      dispatch({
        type: 'DETAIL_CHAT_USER',
        payload: results.data.results,
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

export const allChatUser = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: '',
      });
      const results = await http(token).get(`/chat/all/${id}`);
      dispatch({
        type: 'ALLCHAT_USER',
        payload: results.data.results,
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
