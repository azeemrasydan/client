import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/index';
import Training from './components/Training';
import About from './components/About';
import Contact from './components/PenemuanAudit';
import Category from './components/Category';
import Products from './components/Products';


class App extends Component {
  render() {

    return (
      <Router>

        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" style={{ backgroundColor: 'white' }}></span>
                <span className="icon-bar" style={{ backgroundColor: 'white' }}></span>
                <span className="icon-bar" style={{ backgroundColor: 'white' }}></span>
              </button>
              <img src="/orgLogo.png" alt="Multipurpose"></img>

            </div>

            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-left">
                <li><Link to={'/'} data-toggle="collapse" data-target=".in" >Laman Utama</Link></li>
                <li><Link to={'/training'} data-toggle="collapse" data-target=".in" >Latihan</Link></li>
                <li><Link to={'/penemuan-audit'} data-toggle="collapse" data-target=".in" >Penemuan Audit</Link></li>
                <li><Link to={'/about'} data-toggle="collapse" data-target=".in" >About</Link></li>
                <li><Link to={'/category'} data-toggle="collapse" data-target=".in" >Category</Link></li>
                <li><Link to={'/products'} data-toggle="collapse" data-target=".in" >Products</Link></li>
              </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
          
            </div>
            
          </div>
        </nav>
        

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/training' component={Training} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/category' component={Category} />
            <Route path='/products' component={Products} />
          </Switch>
       

      </Router>
    );
  }
}

export default App;