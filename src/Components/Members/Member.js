import React from 'react';
import './Members.css';

const Member = props => (
    <div className="members">
        <h1>Name: { props.name } <br/>Age: { props.age }</h1>
        <p>Description:<br/>{ props.children }</p>
    </div>
)

export default Member;