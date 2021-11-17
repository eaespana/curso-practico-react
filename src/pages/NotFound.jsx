import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className="NotFound">
            <img src="https://media.istockphoto.com/photos/pug-dog-with-yellow-constructor-safety-helmet-and-cone-and-404-error-picture-id687810238"/>
             <Link to="/">
                <h1>Return to Home</h1>
            </Link>
        </div>
    );
}

export default NotFound;
