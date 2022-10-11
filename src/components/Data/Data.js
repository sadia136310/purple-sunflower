import React from 'react';
import './Data.css'
import { Link } from 'react-router-dom';


const Data = ({data}) => {
 

    const {name,logo,total,id}=data;
    return (
        <div className='card'>
           
            <img src={logo} alt="" />
            <h3> {name}</h3>
            <p>{total} Questions are here</p>
          
            <Link to={`data/${id}`}><button className='btn'>Start Quiz </button> </Link>
              
        </div>
    );
};

export default Data;