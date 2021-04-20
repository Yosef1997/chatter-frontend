import http from '../../Helper/http';

export const user = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'USER_MESSAGE',
        payload: '',
      });
      const results = await http().get(`/user/${id}`);
      dispatch({
        type: 'DETAIL_USER',
        payload: results.data.results,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'USER_MESSAGE',
        payload: message,
      });
    }
  };
};

export const allUser = (token, search, limit, page, sort, order) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'USER_MESSAGE',
        payload: '',
      });
      const response = await http(token).get(
        `user?search=${search !== undefined ? search : ''}&limit=${
          limit !== undefined ? limit : 4
        }&page=${page !== undefined ? page : 1}&sort=${
          sort !== undefined ? sort : 'id'
        }&order=${order !== undefined ? order : 'ASC'}`,
      );
      dispatch({
        type: 'USER',
        payload: response.data.results,
        pageInfo: response.data.pageInfo,
      });
    } catch (err) {
      const {message} = err.response.data;
      dispatch({
        type: 'USER_MESSAGE',
        payload: message,
      });
    }
  };
};
