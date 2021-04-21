const initialState = {
  allUser: null,
  detailUser: null,
  errorMsg: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_USER': {
      return {
        ...state,
        allUser: action.payload,
      };
    }
    case 'DETAIL_USER': {
      return {
        ...state,
        detailUser: action.payload,
      };
    }
    case 'USER_MESSAGE': {
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
