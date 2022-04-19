import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <p>This was made from scratch! Also hello world!</p>
            <button onClick={increment}>Increment</button>
            {counter}
        </div>
    );
};

export default App;
