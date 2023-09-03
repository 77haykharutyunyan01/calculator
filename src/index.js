import React from 'react';
import ReactDOM from 'react-dom/client';
import ScoreBoard from './ScoreBoard';
import ActionButton from './ActionButton';
import './index.css';
//<a href="https://www.flaticon.com/ru/free-icons/" title="полигон иконки">Полигон иконки от Freepik - Flaticon</a>



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
