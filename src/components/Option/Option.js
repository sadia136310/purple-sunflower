import React from 'react';
import './Option.css'

const Option = ({option,showAnsToButton}) => {
    return (
        <div className='option'>
<input onClick={showAnsToButton} type="radio" value="option" name="option" /> {option}
        </div>
    );
};

export default Option;