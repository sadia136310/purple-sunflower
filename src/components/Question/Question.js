import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Question.css'

const Question = ({ques}) => {
    const{correctAnswer,options,question}=ques;
    
    
    return (
        <div  className='ques-container'>
   
      <h3> {question} </h3>
      <p><EyeIcon onClick={()=> alert(correctAnswer)} className='eye-icon'/>
      </p>
    
           {
       options.map(option=> <Option
       key={option.id}
       option={option}
       >
       </Option>)
         }
        </div>
    );
};

export default Question;