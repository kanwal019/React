import React from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = React.useState(initialItems);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>
}

function Form({ onAddItem: addItem }) {
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now()
    };

    addItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {
          Array
            .from({ length: 20 }, (_, i) => i + 1)
            .map(num => (
              <option value={num} key={num}>{num}</option>
            ))
        }
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {
          items.map(item => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))
        }
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem: deleteItem, onToggleItem: toggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have 0 items on your list, you have already packed 0 (0%)</em>
    </footer>
  );
}