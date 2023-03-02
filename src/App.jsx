import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [textList, setTextList] = useState([]);
  const [text, setText] = useState('');

  const add = () => {
    setTextList([...textList, text]);
  }



  return (
    <div className='main'>
      <header>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={add}>추가하기</button>
      </header>

      <h1>Todo List</h1>
      <div className='bound'>
        {textList.map((element, index) => {
          return (<div key={index} className='box'>{element}</div>);
        })
        }
      </div>
    </div>
  );
}

export default App;
