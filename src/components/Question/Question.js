import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Question.css';

import {toast} from 'react-toastify';


const Question = ({ques,count}) => {
    // console.log(ques);
    const{correctAnswer,options,question}=ques;

    const showAnsToButton=(option)=>{
 const showAns=(option === correctAnswer);
 if(showAns){
    toast("Right Ans!");
 }
 else{
   toast('Wrong Ans!');
 }
    }
   
    return (
        <div  className='ques-container'>
   
      <h3>Ques {count+1}.  {question.replace( /(<([^>]+)>)/ig, '')}</h3>
      <p><EyeIcon onClick={()=> toast(correctAnswer)} className='eye-icon'/> </p>
    
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