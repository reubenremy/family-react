import React, { Component } from 'react';
import Member from '../Members/Member';

class App extends Component {
    state

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
