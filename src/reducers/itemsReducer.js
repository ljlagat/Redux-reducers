import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/itemActions';

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: return [...state, action.payload];
    case UPDATE_ITEM: 
      const updatedItems = [...state];
      updatedItems[action.payload.index] = action.payload.item;
      return updatedItems;
    case DELETE_ITEM: return state.filter((_, index) => index !== action.payload);
    default: return state;
  }
};

export default itemsReducer;


