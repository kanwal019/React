export default function Stats({ items }) {
    const numItems = items.length;
    if (!numItems) {
        return (
            <footer className="stats">
                <em>🧳 Your packing list is empty. Start adding items! 📝</em>
            </footer>
        );
    }

    const numPacked = items.filter(item => item.packed).length;
    const percentage = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ?
                    "🎉 You are all packed! Ready to go ✈️" :
                    `💼You have ${numItems} items on your list, you have already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
