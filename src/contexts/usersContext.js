import React,{createContext, Component} from 'react'

export const UsersContext = createContext()

export class UsersProvider extends Component {

    state = {
        isLoading: false,
        users: [],
        isLoading2 : false,
        posts: [],
    }
    componentDidMount() {
        this.setState({isLoading: true})
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response=>response.json())
                .then(users=> this.setState({users,isLoading : false}))
        this.setState({isLoading2: true})
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response=>response.json())
                .then(posts=> this.setState({posts,isLoading2 : false}))
    }

    render() {
      return (
          <UsersContext.Provider value={this.state}>
              {this.props.children}
          </UsersContext.Provider>
      )
  }
}

// const initialState = {
//     isLoading: false,
//    users: null,
// }


// export const UsersProvider = ({children}) => {
//     const[contextState, setContextState] = useState(initialState)
//     useEffect(()=>{
//         setContextState({isLoading: true})
//
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response=>response.json())
//             .then(users=> setContextState({users, isLoading: false}))
//
//     },[setContextState])
//
//     return (
//         <UsersContext.Provider value={contextState}>
//             {children}
//         </UsersContext.Provider>
//     )
// }
