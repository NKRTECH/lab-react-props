import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import imageData from './components/DataComponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>CLASS COMPONENT</h1>
    <AppClass imageData={imageData()} />  
    {/* change the above line - for interchaning between App and AppClass */}
    <h1>FUNCTIONAL COMPONENT</h1>
    <App data={imageData()} />   
  </React.StrictMode>
);
