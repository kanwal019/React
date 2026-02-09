import React from "react";
export default function Item({ currOpen, onOpen, title, index, children }) {
    const isOpen = currOpen === index;
    return (
        <div
            className={`item ${isOpen ? "open" : ""}`}
            key={index}
            onClick={() => onOpen(isOpen ? null : index)}
        >
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}