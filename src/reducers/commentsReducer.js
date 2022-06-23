const USER_TYPES = {
  "ADD [COMMENT]": "ADD [COMMENT]",
  "ADD_ALL [COMMENT]": "ADD_ALL [COMMENT]",
};

const USER_DEFAULT_VALUES = {
  comments: [],
};

const commentsReducer = (state, action) => {
  switch (action.type) {
    case USER_TYPES["ADD [COMMENT]"]:
      return { comments: [...state.comments, action.payload] };
    case USER_TYPES["ADD_ALL [COMMENT]"]:
      return { comments: action.payload };
    default:
      return state;
  }
};

export { commentsReducer, USER_DEFAULT_VALUES, USER_TYPES };
