import React from 'react';

const Member = props => (
    <div>
        <h1>Name: { props.name } | Age: { props.age }</h1>
        <p>Description:<br/>{ props.children }</p>
    </div>
)

export default Member;