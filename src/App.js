// src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Import hooks
import { addItem, updateItem, deleteItem } from './actions/itemActions';  // Action creators

function App() {
  const dispatch = useDispatch();  // Hook for dispatching actions
  const items = useSelector((state) => state.items);  // Hook to access Redux state
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <div>
      <h1>CRUD with Redux</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={() => { dispatch(addItem(newItem)); setNewItem(''); }}>Add</button>

      {editingIndex !== null && (
        <>
          <input
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
            placeholder="Edit item"
          />
          <button onClick={() => { dispatch(updateItem(editingIndex, editItem)); setEditingIndex(null); setEditItem(''); }}>Update</button>
        </>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => { setEditingIndex(index); setEditItem(item); }}>Edit</button>
            <button onClick={() => dispatch(deleteItem(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
