import React from 'react';
import './Members.css';

const Member = props => (
    <div className="members" onClick={ props.click }>
        <h1>Name: { props.name } <br/>Age: { props.age }</h1>
        <p>Description:<br/>{ props.children }</p>
        <input 
            type='text' 
            placeholder= "New Name"
            onChange={ props.changed } 
            value={ props.value }
        />
    </div>
)

export default Member;