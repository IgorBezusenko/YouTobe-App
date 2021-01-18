const SAVE_SEARCH = "SAVE_SEARCH";

const initialState = {
  data: [
    { id: 1, text: "как кормить кошек" },
    { id: 2, text: "как кормить кошек" },
    { id: 3, text: "как кормить кошек" },
  ],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      let newText = {
        id: Date.now().toString(),
        text: action.text,
      };
      return {
        ...state,
        data: [...state.data, newText],
      };

    default:
      return state;
  }
};

export const saveFavourite = (text) => {
  return {
    type: SAVE_SEARCH,
    text,
  };
};
