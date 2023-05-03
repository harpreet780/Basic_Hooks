import React, { useCallback, useState } from 'react'
import { Input } from 'reactstrap';

const UseCallBackFile = () => {
    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);
    const [thirdInput, setThirdInput] = useState(0);
    const [fourInput, setFourInput] = useState(0);
    const totalSum = Number(firstInput) + Number(secondInput);
    //callback fn always render the funct. of given dependency, not all the function.

    const calculate =  useCallback(totalSum, [firstInput, secondInput])

    return (
        <div className='m-auto w-50 p-3'>
            <h4>useCallBack</h4>
            <p><b>Result: </b>{calculate}</p>
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e) => setFirstInput(e.target.value)}
            />
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e) => setSecondInput(e.target.value)}
            />
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e) => setThirdInput(e.target.value)}
            />
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e) => setFourInput(e.target.value)}
            />
        </div>
    )
}

export default UseCallBackFile;