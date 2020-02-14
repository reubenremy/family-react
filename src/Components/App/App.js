import React, { Component } from 'react';
import Member from '../Members/Member';
import './App.css';

class App extends Component {
    //State is initiated by assigning a JS object to it
    state = {
        Members: [
            //Members wil be an Array [] of objects {}
            { 
                name: 'Reu', 
                age:31 
            },{ 
                name: 'Kay', 
                age:28 
            },{ 
                name: 'Rye', 
                age: 4 
            },{ 
                name: 'Vava', 
                age: 1 
            }
        ],
        otherState: 'Some other Value',
        showPersons: false
    }

    fullNameHandler = newName => {
        // console.log('This was clicked Successfully');
        //DON'T DO THIS: this.state.Members[0].name = 'Reuben';
        //React doesn't recognize direct mutations to state without Component's Inherit method called "setState"
        this.setState({
            Members: [
                { 
                    name: newName, 
                    age:31 
                },{ 
                    name: 'Kethny', 
                    age:28 
                },{ 
                    name: 'Rylee', 
                    age: 4 
                },{ 
                    name: 'Reva', 
                    age: 1 
                }
            ]
        });
    }

    nameChangeHandler = event => {
        this.setState({
            Members: [
                { 
                    name: 'Reuben', 
                    age:31 
                },{ 
                    name: event.target.value, 
                    age:28 
                },{ 
                    name: 'Rylee', 
                    age: 4 
                },{ 
                    name: 'Reva', 
                    age: 1 
                }
            ]
        });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.setPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        const style = {
            backgroundColor:'#fff',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            borderRadius: '5px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                { 
                    this.state.showPersons === true ? 
                    {/* the code below is converted to react.createElement behind the scenes when Compilied */}
                    <div>
                        <Member 
                            name={ this.state.Members[0].name } 
                            age={ this.state.Members[0].age }
                            //Version One of passing Props **Use this instead of V2 if you can**
                            {/* click={ this.fullNameHandler.bind(this, 'John') } */}
                            click={ this.toggleMembersHandler }
                            changed= { this.nameChangeHandler }
                            >Father of the Family</Member>

                        <Member 
                            name={ this.state.Members[1].name } 
                            age={ this.state.Members[1].age }
                            >Mother of the Family</Member>

                        <Member 
                            name={ this.state.Members[2].name } 
                            age={ this.state.Members[2].age }
                            >Oldest Child of the Family</Member>
                            
                        <Member 
                            name={ this.state.Members[3].name } 
                            age={ this.state.Members[3].age }
                            >Youngest Child of the Family</Member>
                        {/* 
                            - Remember that "This" refers to the class
                            - Also you want to pass the method or "executable property" as a reference
                        */}
                    </div> : null
                }

                <button 
                    style={style}
                    //Version two of passing Props
                    onClick={ () => this.fullNameHandler('George') }
                >Full Name</button>
            </div>
        );
    }
}

export default App;