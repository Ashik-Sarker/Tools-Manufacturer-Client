import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Tool from './Tool';

const Tools = () => {
    // const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('tools.json').then(res => res.json()))
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    },[])
    // console.log(tools);
    return (
        <div className='flex flex-col items-center mt-12 font-bold text-primary'>
            <h1 style={{letterSpacing:'10px'}} className='text-4xl font-extrabold my-12'>TOOLS</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {
                tools.slice(0,6).map(tool => <Tool
                key={tool._id}
                tool={tool}
                ></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;