import React, { useLayoutEffect, useState } from 'react'

const UseLayouteffectFile = () => {
    //working synchronously
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
    };


    useLayoutEffect(() => {
        handleWindowResize()
    }, [])

    console.log(windowSize, "window size====")

    return (
        <div className='m-auto w-50 p-3'>
            <h4>UseLayoutEffect</h4>
            <p>Width: <b> {windowSize[0]}px </b></p>
            <p>Height: <b> {windowSize[1]}px </b></p>
        </div>
    )
}

export default UseLayouteffectFile;