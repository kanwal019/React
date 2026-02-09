import Item from './Item';

export default function Accordion({ faqs }) {
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