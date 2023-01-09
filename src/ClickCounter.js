import React, { useState, useEffect } from "react";

export default function ClickCounter() {
    const [counter, setCounter] = useState(0);

    function onCounterChange(counter) {
        console.log("The current number is " + counter);
    }

    useEffect(() => onCounterChange(counter), [counter])

    return <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
    </div>
}