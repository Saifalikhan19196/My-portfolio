import { useState, useCallback, useEffect, useRef } from 'react';
import { FiLock, FiShield, FiCheck, FiCopy } from "react-icons/fi";

function PasswordGenerator() {
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [Password, setPassword] = useState("");
    const [strength, setStrength] = useState("");
    const passwordRef = useRef(null);

    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+=>";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
        evaluateStrength(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyPasswordClip = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(Password);
    }, [Password]);

    const evaluateStrength = (pass) => {
        let score = 0;
        if (pass.length > 6) score += 1;
        if (numberAllowed) score += 1;
        if (charAllowed) score += 1;
        if (pass.length >= 12) score += 1;

        const strengthLevels = ["Weak", "Medium", "Strong", "Very Strong"];
        setStrength(strengthLevels[score]);
    };

    useEffect(() => {
        PasswordGenerator();
    }, [length, numberAllowed, charAllowed, PasswordGenerator]);

    const renderStrengthIcon = () => {
        switch (strength) {
            case "Weak":
                return <FiLock className="text-2xl text-red-500" />;
            case "Medium":
                return <FiShield className="text-yellow-400 text-2xl" />;
            case "Strong":
                return <FiCheck className="text-green-500 text-2xl" />;
            case "Very Strong":
                return <FiCheck className="text-blue-400 text-2xl" />;
            default:
                return <FiLock className="text-red-500 text-2xl" />;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-gray-800 px-4">
            <div className='w-full max-w-md shadow-xl rounded-2xl p-6 text-orange-500 bg-slate-900 border border-gray-600'>
                <h1 className='text-white text-3xl font-bold text-center mb-6'>
                    Password Generator
                </h1>

                {/* Password Output and Copy Button */}
                <div className='flex items-center shadow-lg rounded-lg mb-6'>
                    <input
                        type="text"
                        ref={passwordRef}
                        value={Password}
                        className='outline-none w-full py-2 px-4 text-lg rounded-l-lg bg-slate-800 text-gray-300 border border-gray-600'
                        placeholder='Generated password'
                        readOnly
                    />
                    <button
                        onClick={copyPasswordClip}
                        className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-r-lg shadow'>
                        <FiCopy className="text-lg" /> Copy
                    </button>
                </div>

                {/* Password Strength Indicator */}
                <div className="mb-6 text-center text-gray-300 flex items-center justify-center space-x-2">
                    {renderStrengthIcon()}
                    <span>Password Strength: <strong className={strength === "Weak" ? "text-red-500" : strength === "Medium" ? "text-yellow-400" : strength === "Strong" ? "text-green-500" : "text-blue-400"}>{strength}</strong></span>
                </div>

                {/* Length and Options */}
                <div className='flex flex-col gap-4 mb-6'>
                    <div className='flex items-center justify-between'>
                        <label className='text-gray-300 text-sm font-medium'>Password Length: {length}</label>
                        <input
                            type="range"
                            min={4}
                            max={15}
                            value={length}
                            className='cursor-pointer w-2/3 appearance-none rounded-lg bg-blue-700 h-2'
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                    </div>

                    <div className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            id='numberInput'
                            checked={numberAllowed}
                            className='h-4 w-4 text-blue-600 focus:ring-0'
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                        <label htmlFor='numberInput' className='text-gray-300 text-sm'>Include Numbers</label>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            id='characterInput'
                            checked={charAllowed}
                            className='h-4 w-4 text-blue-600 focus:ring-0'
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label htmlFor='characterInput' className='text-gray-300 text-sm'>Include Special Characters</label>
                    </div>
                </div>

                {/* Generate Password Button */}
                <div className='text-center'>
                    <button
                        onClick={PasswordGenerator}
                        className='bg-green-600 hover:bg-green-700 transition-colors text-white font-medium px-6 py-2 rounded-lg flex items-center gap-2 justify-center shadow'>
                        <FiLock className="text-lg" /> Generate New Password
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
