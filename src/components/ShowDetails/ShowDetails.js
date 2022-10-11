import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const ShowDetails = () => {
  const dataDetails=useLoaderData()
  console.log(dataDetails.data);
  const {name,total,questions}=dataDetails.data;
 
    return (
        <div>
            <h1> {name} Question</h1>
            <p>Total Question: {total}</p>
            {
       questions.map(ques=> <Question
       key={ques.id}
       ques={ques}
       >
       </Question>)
         }
          
        </div>
    );
};

export default ShowDetails;