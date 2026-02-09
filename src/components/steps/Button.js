export function Button({ textColor, backgroundColor, onClick, text }) {
    return (
        <button
            style={{ backgroundColor: backgroundColor, color: textColor }}
            onClick={onClick}
            onMouseEnter={() => console.debug(`Enter ${text} button`)}
        >
            {text}
        </button>
    );
}
