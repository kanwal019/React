import React from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {
        faqs.map((faq, i) => (
          <Item faq={faq} index={i} key={i} />
        ))
      }
    </div>
  );
}

function Item({ faq, index }) {
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
