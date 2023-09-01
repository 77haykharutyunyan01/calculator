import React from 'react';
import ReactDOM from 'react-dom/client';
import ScoreBoard from './ScoreBoard/ScoreBoard';
import ActionButton from './ActionButton/ActionButton';
import './index.css';


const App = () => {
  return (
    <div className='app'>
      <ScoreBoard />
      <ActionButton />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
