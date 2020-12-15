import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UsersContext} from './contexts/usersContext'

class App extends React.Component {

    render() {
     const {users,isLoading} = this.context;
      return (
            <div className="App">
                {
                    isLoading && <h1>LODING.....</h1>
                }
                {
                    users.map((user) => <h1 key={user.id}>{user.name}</h1>)
                }
            </div>
        )
    }
}

App.contextType = UsersContext

export default App;
