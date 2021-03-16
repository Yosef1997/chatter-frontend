const initialState = {
  token: null,
  updateUser: null,
  detailUser: null,
  user: null,
  message: '',
  errorMsg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP': {
      return {
        ...state,
        message: action.payload,
      };
    }
    case 'SIGN_IN': {
      return {
        ...state,
        token: action.payload,
        user: action.user,
      };
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        updateUser: action.payload,
      };
    }
    case 'DETAIL_USER': {
      return {
        ...state,
        detailUser: action.payload,
      };
    }
    case 'SET_AUTH_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'SIGNOUT': {
      return {
        ...state,
        token: null,
        user: null,
        message: '',
        errorMsg: '',
      };
    }
    default:
      return {...state};
  }
};

export default authReducer;
