// Higher order component (HOC) - A component that renders another component
// Goal is to reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        <div>
            <p> This is private info, don't share</p>
            <WrappedComponent {...props}/>
        </div>
    }
};

const adminInfo = withAdminWarning(Info);

// requireAuthentication

const RequireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (<WrappedComponent {
            ...props}/>
        ) : (
            <p>Please log in to view the info</p>
        )}
        </div>
    );

};

const AuthInfo = RequireAuthentication(Info);


// ReactDOM.render(<Info info='these are the details'/>, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info='these are the details'/>, document.getElementById('app'));