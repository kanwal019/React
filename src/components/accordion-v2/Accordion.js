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
                        faq={faq}
                        index={i}
                        key={i}
                    />
                ))
            }
        </div>
    );
}