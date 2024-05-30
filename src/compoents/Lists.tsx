import React, { useState, useEffect } from 'react';

const Lists = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    // Load items from localStorage when the component mounts
    useEffect(() => {
      const storedItems = localStorage.getItem('items');
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
    }, []);
  
    // Save items to localStorage whenever the items state changes
    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
  
    const handleAddItem = () => {
      if (inputValue.trim()) {
        setItems([...items, inputValue]);
        setInputValue('');
      }
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleRemoveItem = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    return (
      <div>
        <h1>List Component</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new item"
        />
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Lists;