import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
  const dataDetails=useLoaderData()
  console.log(dataDetails.data);
    return (
        <div>
            <h3>show</h3>
        </div>
    );
};

export default ShowDetails;