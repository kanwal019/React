import React from "react";
export default function Item({ faq, index }) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div
            className={`item ${isOpen ? "open" : ""}`}
            key={index}
            onClick={() => setIsOpen(!isOpen)}
        >
            <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
            <p className="title">{faq.title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{faq.text}</div>}
        </div>
    );
}