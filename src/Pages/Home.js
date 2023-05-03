import React from 'react';
import UseMemoFile from '../components/UseMemoFile';
import UseCallBackFile from '../components/UseCallBackFile';
import UseRefFile from '../components/UseRefFile';
import UseLayouteffectFile from '../components/UseLayouteffectFile';

const Home = () => {

    return (
        <div className='p-5'>
            <h2 className='text-decoration-underline'>Hooks Implementation</h2>
            <UseMemoFile />
            <UseCallBackFile />
            <UseLayouteffectFile/>
            <UseRefFile />
        </div>
    )
}

export default Home;