export function Button({ textColor, backgroundColor, onClick, text, emoji }) {
    return (
        <button
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={onClick}
            onMouseEnter={() => console.debug(`Enter ${text} button`)}
        >
            {emoji && <span>{emoji}</span>} {text}
        </button>
    );
}
