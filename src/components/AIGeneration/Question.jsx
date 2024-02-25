/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';

function Question({ isFocusedprop, questionBody, example, name, change, value, error, touched }) {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocusedprop) {
            inputRef.current.focus();
        }
        setIsFocused(isFocusedprop);
    }, [isFocusedprop]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div
            id="Header"
            className={`mt-5 gap-3 flex flex-col justify-start p-10 rounded-2xl shadow-md border-l-8 transition-all duration-300 ${isFocused ? 'border-[#F58529]' : 'border-transparent'
                }`}
        >
            <h2 className="text-[22px] font-semibold">{questionBody}</h2>
            <p className="text-[16px] font-medium">{example}</p>
            <input
                id={name}
                name={name}
                ref={inputRef}
                type="text"
                placeholder="Write your Answer here."
                className="rounded-xl focus:border-[#F58529] focus:ring-[#F58529] group"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={change}
                value={value}
            />
            {touched && error ? <div className="mb-2 text-red-600">{error}</div> : null}
        </div>
    );
}

export default Question;
