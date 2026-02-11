import Input from "./Input";
import Selector from "./Selector";
import Output from "./Output";
import Reset from "./Reset";

import "./TipCalculator.css";

export default function App() {
    return (
        <div>
            <TipCalculator />
        </div>
    );
}

function TipCalculator() {
    return (
        <div>
            <Input />
            <Selector>How did you like the service?</Selector>
            <Selector>How did your friend like the service?</Selector>
            <Output />
            <Reset />
        </div>
    );
}
