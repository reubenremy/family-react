import React, { Component } from 'react';
import Member from '../Members/Member';

class App extends Component {
    //State is initiated by assigning a JS object to it
    state = {
        Members: [
            //Members wil be an Array [] of objects {}
            { name: 'Reu', age:31 },
            { name: 'Kay', age:28 },
            { name: 'Rylee', age: 4 },
            { name: 'Reva', age: 1 }
        ]
    }

    render() {
        return (
            <div className="App">
                <Member name='Reu' age='27'>Father of the Family</Member>
                <Member name='Kay' age='24'>Mother of the Family</Member>
                <Member name='Rylee' age='3'>Oldest Child in the Family</Member>
                <button>Switch Name</button>
            </div>
        );
    }
}

export default App;
