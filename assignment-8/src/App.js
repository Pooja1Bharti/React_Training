
import React from 'react';
import './App.css';

import ParentComponent from './Functional-component/ParentComponent';

function App() {
 
 return (
    <div className="App">
     <ParentComponent />
    
    </div>
 );
 /* return React.createElement('h1',null, "hello world");*/
}

export default App;
