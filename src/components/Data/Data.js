import React from 'react';
import './Data.css'

const Data = ({data}) => {
    const {name,logo,total}=data;
    return (
        <div className='card'>
           
            <img src={logo} alt="" />
            <h3> {name}</h3>
            <p>{total} Questions are here</p>
            <button className='btn'>Start Quiz </button>
        </div>
    );
};

export default Data;