import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error-container'>
            <h1>404!</h1>
            <h1>Sorry, we couldn't find this page</h1>
            <br />
            <br />
             <Link to='/'className="error">
            Back to homepage
          </Link>
        </div>
    );
};

export default ErrorPage;