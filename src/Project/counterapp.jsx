import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
    };

    const removeValue = () => {
        setCounter(counter - 1);
    };

    const resetValue = () => {
        setCounter(0);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h1>

                {/* Counter Card */}
                <div className="bg-blue-100 p-6 rounded-lg shadow-inner mb-4">
                    <h2 className="text-lg text-gray-600 mb-2">Counter Value</h2>
                    <div className="text-4xl font-bold text-blue-600">
                        {counter}
                    </div>
                </div>

                {/* Buttons remain side-by-side on all screen sizes */}
                <div className="flex justify-between space-x-4 mb-6">
                    <button
                        onClick={addValue}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-1/2"
                    >
                        + Value
                    </button>
                    <button
                        onClick={removeValue}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/2"
                    >
                        - Value
                    </button>
                </div>

                <button
                    onClick={resetValue}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter
