import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UsersContext} from './contexts/usersContext'

class App extends React.Component {

    render() {
     const {users,isLoading, posts,isLoading2} = this.context;
      return (
            <div className="App">
                {
                    isLoading && <h1>LODING.....users</h1>
                }
                {
                    users.map((user) => <h1 key={user.id}>{user.name}</h1>)
                }
                <hr/>
                {
                    isLoading2 && <h1>LODING.....posts</h1>
                }
                {
                    posts.map((post) => <p key={post.id}>{post.title}</p>)
                }
            </div>
        )
    }
}

App.contextType = UsersContext

export default App;
