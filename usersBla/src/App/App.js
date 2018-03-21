import React, { Component } from 'react';
import '../App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UserList from "./users/UserList"
import { userService } from '../service/UserService';
import Loader from "./partials/Loader";


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isListView: true,
      load:true
    }
  }
  componentDidMount() {
    this.loadUsers();
  }

  onClickChangeView = event => {
    event.preventDefault();
    // promeni stanje u true ako je false
    // ili u false ako je true
    const newViewState = !this.state.isListView;
    this.setState({ isListView: newViewState });
  }
  onClickRefreshUsers = event => {
    event.preventDefault();
    this.loadUsers();
   this.setState({
     load : true 
   })
  }

  loadUsers = () => userService.fetchUsers()
    .then((userList) => {
      this.setState({ 
        users: userList,
        load : false
       })

    })


  render() {
    

    return (
      <div>
        <Header title="React users" onChangeView={this.onClickChangeView} isListView={this.state.isListView} refresh={this.onClickRefreshUsers} />
    { this.state.load ?  <Loader/> : <UserList users={this.state.users} isListView={this.state.isListView} /> }
        <Footer />
      </div>
    )
  }}
  


export default App;
