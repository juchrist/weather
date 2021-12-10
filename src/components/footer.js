import React from 'react';
/*import loadjs from 'loadjs';
import { Link } from 'react-router-dom';
import { loadOptions } from '@babel/core';
import Script from 'react-load-script';*/

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}	

	render() {
		return (
            <div>
              {/* Footer */}
              <section className="w3l-footer py-sm-5 py-4">
                  <div className="container">
                    <div className="footer-content">
                      <div className="row">
                        <div className="col-lg-8 footer-left">
                          <p className="m-0">Juchrist © Copyright 2020</p>
                        </div>
                        <div className="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
                          <ul className="social m-0 p-0">
                            <li><a href="http://www.github.com/juchrist"><span className="fa fa-github" /></a></li>
                            <li><a href="http://www.facebook.com/ore.christopherjuwon"><span className="fa fa-facebook-official" /></a></li>
                            <li><a href="https://www.linkedin.com/in/ore-christopher-juwon-7b4858104"><span className="fa fa-linkedin-square" /></a></li>
                            <li><a href="https://instagram.com/juchrist"><span className="fa fa-instagram" /></a></li>
                            <li><a href="https://twitter.com/juchristt"><span className="fa fa-twitter" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
          </div>            
        
		)
  }
  
}



export default Footer;