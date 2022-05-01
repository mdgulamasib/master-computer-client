import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='m-5'>
                <h3>Q1. What are the core Difference between JavaScript and Node JS?</h3>
                <p>A1. The most fundamental yet crucial difference between JS and Node JS is that JavaScript is a programming language that is used to write scripts, whereas Node JS is a JavaScript runtime environment that is used to develop applications. Node JS is used to establish a runtime environment that allows JavaScript code to be executed in a production environment (system where codes are built) as well as in the application (browser or any other application) where it is meant to be executed. Javascript is a programming language that can only be used in browsers, however we can execute Javascript outside of the browser with the help of NodeJS.</p>
            </div>
            <div className='m-5'>
                <h3>Q2. When should you use nodejs and when should you use mongodb?</h3>
                <p>A2. Node JS and MongoDB are two distinct technologies with distinct goals. We use Node JS to establish a runtime environment in which we can write scripting languages like JavaScript in the editor while also connecting the browser and development environment together. MongoDB, on the other hand, is a data storage database. MongoDB is a great solution for people who like to store data in an unstructured format. W hen developers just need to store data in JSON format, MongoDB is a suitable choice since it is simple to administrate and easy setup process.</p>
            </div>
            <div className='m-5'>
                <h3>Q2. What are the Differences between sql and nosql databases?</h3>
                <p>A2. In terms of data storing system, SQL and NoSQL databases are virtually diametrically opposed. SQL databases are used to store data in a tabular manner that is structured. NoSQL databases, on the other hand, utilized to store data in an unstructured manner.  Node JS, for example, is a NoSQL database since it stores data in an unstructured format. SQL databases are ideal for multi-row transactions, although NoSQL is better for JSON. NoSQL databases scale horizontally rather than vertically, as SQL databases do.</p>
            </div>
            <div className='m-5'>
                <h3>Q2. What is the purpose of jwt and how does it work?</h3>
                <p>A2. JWT (JSON Web Token) is used to authenticate the correct request and prevent unauthorized data access. In simpler words, the JWT procedure is divided into two parts: client and server. Client-side JWT is provided by the server, and server-side JWT is built using a secret key that is kept hidden. To ensure that claims cannot be modified after the token has been delivered, JWTs are signed using a cryptographic mechanism. When a user signs in for the first time, even if they reload their protected page, each time token is confirmed.</p>
            </div>
        </div>
    );
};

export default Blogs;