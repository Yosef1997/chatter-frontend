const initialState = {
  allChat: null,
  detailChat: null,
  chat: '',
  errorMsg: '',
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CHAT': {
      return {
        ...state,
        allChat: action.payload,
      };
    }
    case 'DETAIL_CHAT': {
      return {
        ...state,
        detailChat: action.payload,
      };
    }
    case 'CREATE_CHAT': {
      return {
        ...state,
        chat: action.payload,
      };
    }
    case 'CHAT_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    case 'CHAT_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export default chatReducer;
