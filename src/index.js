import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/app.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Layout from './components/Layout';

ReactDOM.render(
	<Layout />,
	document.getElementById('root')
);

registerServiceWorker();
