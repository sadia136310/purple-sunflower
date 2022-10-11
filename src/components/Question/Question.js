import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Question.css';

import {toast} from 'react-toastify';


const Question = ({ques}) => {
    // console.log(ques);
    const{correctAnswer,options,question}=ques;

    const showAnsToButton=(option)=>{
 const showAns=(option === correctAnswer);
 if(showAns){
    toast("right Ans!");
 }
 else{
   toast('wrong Ans!');
 }
    }
    
    return (
        <div  className='ques-container'>
   
      <h3>ques: {question} </h3>
      <p><EyeIcon onClick={()=> toast(correctAnswer)} className='eye-icon'/>
      </p>
    
           {
       options.map(option=> <Option
       key={option.id}
       option={option}
       showAnsToButton={showAnsToButton}
       >
       </Option>)
         }
        </div>
    );
};

export default Question;