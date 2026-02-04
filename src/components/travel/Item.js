export default function Item({ item, onDeleteItem: deleteItem, onToggleItem: toggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                checked={item.packed}
                onChange={() => toggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
        </li>
    );
}
