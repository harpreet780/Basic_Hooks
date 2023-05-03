import React, { useMemo, useState } from 'react'
import { Input } from 'reactstrap';

const UseMemoFile = () => {
    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);
    const [thirdInput, setThirdInput] = useState(0);
    const [fourInput, setFourInput] = useState(0);
    const totalSum = Number(firstInput) + Number(secondInput) + Number(thirdInput);
    //Calculate sum of 3 fields but show result of two acc. to memo dependencie, as I add only 2 dependency

    const calculateSum =  useMemo(()=> totalSum, [firstInput, secondInput])

    return (
        <div className='m-auto w-50 p-3'>
            <h4>UseMemo</h4>
            <p><b>Result: </b>{calculateSum}</p>
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e)=> setFirstInput(e.target.value)}
            />
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e)=> setSecondInput(e.target.value)}
            />
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e)=> setThirdInput(e.target.value)}
            />
            <Input
                type="number"
                placeholder='Enter any number'
                className='mb-4'
                onChange={(e)=> setFourInput(e.target.value)}
            />
        </div>
    )
}

export default UseMemoFile;