
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addItem = (item, cost) => {
  return {
    type: ADD_ITEM,
    payload: {item, cost}
  };
};




export const removeItem = (item, cost) => {
  return {
    type: REMOVE_ITEM,
    payload: { item, cost },
  };
};
