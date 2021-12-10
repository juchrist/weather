import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/style.css';
import './css/easy-responsive-tabs.css';
import Main from './components/main';
import * as serviceWorker from './serviceWorker';
/*<Route path='/state/:name' component={State} />
<Route path='/about' component={About} />
<Route path='/api' component={Api} />*/


ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={Main} />
		</div>
	</Router>,
document.getElementById('root'));

serviceWorker.unregister();
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA