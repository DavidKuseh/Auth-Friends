import React from 'react';

const Friend = props => {
    const { name, age , email } = props.character;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}

export default Friend;