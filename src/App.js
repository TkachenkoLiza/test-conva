import React from 'react';
import './App.css';
import TextDragAndDrop from './Components/textDragandDrop';
import Shapes from './Components/shapes';

function App() {
  return (
    <div>
      <div className="shapes-position">
      <TextDragAndDrop />
      </div>
      <div className="shapes-position">
      <Shapes />
      </div>
    </div>
  );
}

export default App;
