import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';

const Option = ({option,showAnsToButton}) => {
    return (
        <div className='option'>
<input onClick={()=>showAnsToButton(option)} type="radio" value="option" name="option" /> {option}

<ToastContainer />
        </div>
    );
};

export default Option;