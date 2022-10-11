import React from 'react';
import './Data.css'
import {useNavigate} from 'react-router-dom';


const Data = ({data}) => {
    console.log(data)
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`data/${id}`);
    }
    const {name,logo,total,id}=data;
    return (
        <div className='card'>
           
            <img src={logo} alt="" />
            <h3> {name}</h3>
            <p>{total} Questions are here</p>
            <button onClick={handleNavigate} className='btn'>Start Quiz </button>
              
        </div>
    );
};

export default Data;