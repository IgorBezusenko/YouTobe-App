import { playListAPI } from "../API/api";

const SET_ITEMS = "SET_ITEMS";

const initialState = {
  items: [],
  isFetching: false,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: [...action.items],
      };

    default:
      return state;
  }
};

export const setItems = (items) => {
  return {
    type: SET_ITEMS,
    items,
  };
};

export const getItems = () => async (dispatch) => {
  const data = await playListAPI.getPlayList();
  dispatch(setItems(data.items));
};
