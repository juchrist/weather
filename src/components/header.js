import React from 'react';
//import loadjs from 'loadjs';
import { Link } from 'react-router-dom';
//import { loadOptions } from '@babel/core';
//import Script from 'react-load-script';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		return (
            <div>
            <header id="site-header" className="fixed-top">
              <div className="container">
                <nav className="navbar navbar-expand-lg stroke">
                  <a className="navbar-brand" href="index.html">
                    <span className="fa fa-laptop" /> Juchrist
                  </a>
                  <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                    <span className="navbar-toggler-icon fa icon-close fa-times" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item @@about__active">
                        <Link className="nav-link" to="about">Meet Me</Link>
                      </li>
                      <li className="nav-item @@resume__active">
                        <Link className="nav-link" to="resume">Resume</Link>
                      </li>
                      <li className="nav-item @@contact__active">
                        <Link className="nav-link" to="contact">Contact Me</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
          </div>            
        
		)
  }
  
/*  handleScriptCreate() {
    this.setState({scriptLoaded: true})
  }
  
  handleScriptError() {
    this.setState({scriptError: true});
  }
  
  handleScriptLoad() {
  this.setState({scriptLoaded: true});
  }*/
  
}



export default Header;