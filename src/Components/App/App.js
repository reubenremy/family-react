import React, { Component } from 'react';
import Member from '../Members/Member';

class App extends Component {
    //State is initiated by assigning a JS object to it
    state = {
        Members: [
            //Members wil be an Array [] of objects {}
            { name: 'Reuben', age:31 },
            { name: 'Kay', age:28 },
            { name: 'Rylee', age: 4 },
            { name: 'Reva', age: 1 }
        ]
    }

    switchNameHandler = () => {
        console.log('This was clicked Successfully');
    }

    render() {
        return (
            <div className="App">
                <Member name={ this.state.Members[0].name } age={ this.state.Members[0].age }>Father of the Family</Member>
                <Member name={ this.state.Members[1].name } age={ this.state.Members[1].age }>Mother of the Family</Member>
                <Member name={ this.state.Members[2].name } age={ this.state.Members[2].age }>Oldest Child of the Family</Member>
                <Member name={ this.state.Members[3].name } age={ this.state.Members[3].age }>Youngest Child of the Family</Member>
                {/* 
                    - Remember that "This" refers to the class
                    - Also you want to pass the method or "executable property" as a reference
                */}
                <button onClick={ this.switchNameHandler }>Switch Name</button>
            </div>
        );
    }
}

export default App;
