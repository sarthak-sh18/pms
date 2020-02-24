import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import get from './pages/get'
import Post from './pages/Post'
import Welcome from './pages/Welcome'
import NavigationBar from './components/NavigationBar'
import  {Navbar,Nav,Container,Row,Jumbotron,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {




    return (


      <Router basename="/react-auth-ui/">
        <NavigationBar/>

          <Route exact path='/' component={Welcome}>
          </Route>
              <Route exact path='/get' component={get}>
              </Route>
               <Route exact path="/Post" component={Post}>
               </Route>




      </Router>

    )
  }
}

export default App
