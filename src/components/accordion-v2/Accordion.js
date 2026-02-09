import React from 'react';
import Item from './Item';

export default function Accordion({ faqs }) {
    const [currentOpenIndex, setCurrentOpenIndex] = React.useState(null);
    return (
        <div className="accordion">
            {
                faqs.map((faq, i) => (
                    <Item
                        currOpen={currentOpenIndex}
                        onOpen={setCurrentOpenIndex}
                        title={faq.title}
                        index={i}
                        key={faq.title}
                    >
                        {faq.text}
                    </Item>
                ))
            }
            <Item
                currOpen={currentOpenIndex}
                onOpen={setCurrentOpenIndex}
                title={"How many people can I invite to the party?"}
                index={faqs.length}
                key={"last"}
            >
                You can invite up to 2 people to the party.
            </Item>
        </div>
    );
}