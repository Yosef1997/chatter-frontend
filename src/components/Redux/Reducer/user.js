const initialState = {
  chatUser: null,
  historyChat: null,
  message: '',
  errorMsg: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAIL_CHAT_USER': {
      return {
        ...state,
        chatUser: action.payload,
      };
    }
    case 'ALLCHAT_USER': {
      return {
        ...state,
        historyChat: action.payload,
      };
    }
    case 'SET_AUTH_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default userReducer;
