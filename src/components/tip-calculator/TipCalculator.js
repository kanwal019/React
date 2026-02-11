import Input from "./Input";
import Output from "./Output";
import Reset from "./Reset";
import Selector from "./Selector";
import { useState } from "react";

export default function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [yourPercentage, setYourPercentage] = useState(0);
    const [friendPercentage, setFriendPercentage] = useState(0);

    const tip = bill * ((yourPercentage + friendPercentage) / 2) / 100;

    function handleReset() {
        setBill(0);
        setYourPercentage(0);
        setFriendPercentage(0);
    }

    return (
        <div>
            <Input
                bill={bill}
                onSetBill={setBill}
            />
            <Selector
                percentage={yourPercentage}
                onSetPercentage={setYourPercentage}>How did you like the service?</Selector>
            <Selector
                percentage={friendPercentage}
                onSetPercentage={setFriendPercentage}>How did your friend like the service?</Selector>
            <Output
                bill={bill}
                tip={tip}
            />
            <Reset onReset={handleReset} />
        </div>
    );
}
