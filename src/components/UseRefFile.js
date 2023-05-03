import React, { useRef, useState } from 'react'

const UseRefFile = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(0);

    const handleButtonCount = () => {
        ref.current = ref.current + 1;
        setCount(ref.current);
    }
    const gotTop = () => {
        ref.current = window.scrollTo({
            top: ref.current,
            left: 0,
            behavior: "smooth",
        });
        setCount(ref.current);
    }

    return (
        <div className='m-auto w-50 p-3'>
            <h4>UseRef</h4>
            <button onClick={handleButtonCount} className='button'>How many times clicked!</button>
            <p className='mt-2'><b>Result: {count}</b></p>
            <button onClick={gotTop} className='button'>Go to top</button>
        </div>
    )
}

export default UseRefFile;