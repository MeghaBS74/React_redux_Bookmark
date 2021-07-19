import React, { Component } from 'react';
import { BrowserRouter as Router , Link , Route , Switch } from 'react-router-dom';
import AddBookmark from '../containers/AddBookmark';
import About from './About';
import Contactus from './Contactus';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Header extends Component {
    render() {
        return (
            <>  
                
                <Router>
                  <div className = "menu">
                  <div className = "menuheader">
                    <h3><center><b> Bookmark Bank </b></center></h3>
                </div>
                      <Link to='/' className = "menu">Home</Link>
                
            
                      <Link to='/about' className = "menu">About</Link>
                
                      <Link to='/contactus' className = "menu">Contact Us</Link>
                  </div>
                  <div>
                      <Switch>
                          <Route exact path = '/' > <AddBookmark /></Route>
                          <Route path = '/about'><About /></Route>
                          <Route path = '/contactus'><Contactus /></Route>
                      </Switch>
                  </div>
                </Router>
            </>
        )
    }
}
