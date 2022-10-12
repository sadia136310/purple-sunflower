import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'



const Statistics = () => {
const {data}=useLoaderData();
console.log(data);
    
    return (
       <div>
          <h1>Total Number of Quizzes</h1>
         <div className='chart-container'>
          
            <LineChart width={400} height={400} data={data}>
       <Line type="monotone" dataKey="total" stroke="#82ca9d" />
       <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
       </LineChart>
    </div>
       </div>

    );
};

export default Statistics;