const initialState = {
  token: null,
  // picture: null,
  // name: null,
  // password: null,
  // phone: null,
  dataRegister: null,
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
        dataRegister: null,
      };
    }
    case 'DATA_REGISTER': {
      return {
        ...state,
        dataRegister: {...state.dataRegister, ...action.payload},
      };
    }
    case 'UPDATE_USER': {
      return {
        ...state,
        user: {...state.user, ...action.payload},
        message: action.message,
      };
    }
    case 'DELETE_USER': {
      return {
        ...state,
        user: {...state.user, ...action.payload},
      };
    }
    case 'SIGN_OUT': {
      return {
        ...state,
        token: null,
        message: '',
        errorMsg: '',
        dataRegister: null,
      };
    }
    case 'SET_AUTH_MESSAGE': {
      return {
        ...state,
        message: '',
        errorMsg: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default authReducer;
