import itemsReducer from './itemsReducer';
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/itemActions';

test('should add an item', () => {
  expect(itemsReducer([], { type: ADD_ITEM, payload: 'New Item' })).toEqual(['New Item']);
});

test('should update an item', () => {
  const state = ['Item 1', 'Item 2'];
  expect(itemsReducer(state, { type: UPDATE_ITEM, payload: { index: 0, item: 'Updated Item' } })).toEqual(['Updated Item', 'Item 2']);
});

test('should delete an item', () => {
  const state = ['Item 1', 'Item 2'];
  expect(itemsReducer(state, { type: DELETE_ITEM, payload: 1 })).toEqual(['Item 1']);
});
