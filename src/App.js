import './App.css';
import {useState} from 'react'

export default function App() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date()
    date.setDate(date.getDate() + count)

    function handlePreviousCount(){
        setCount(c => c-step)
    }
    function handleNextCount(){
        setCount(c => c+step);
    }

    function handleReset(){
        setStep(1)
        setCount(0);
    }

  return (
      <div className="App">
          <div>
              <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}/>
              <span>{step}</span>
          </div>
          <div className="buttons-container">
              <button onClick={handlePreviousCount}>-</button>
              <input type="text" value={count} onInput={e => setCount(Number(e.target.value)?Number(e.target.value):0)}/>
              <button onClick={handleNextCount}>+</button>
          </div>
          <p>
          {count===0 && <span>Today is <b className="date">{date.toDateString()}</b></span>}
              {count>0 && <span><b>{count}</b> days from Today is <b className="date">{date.toDateString()}</b> </span>}
              {count<0 && <span><b>{Math.abs(count)}</b> days ago was <b className="date">{date.toDateString()}</b> </span>}
          </p>
          {(step !== 1 || count !== 0) && <button onClick={handleReset}>Reset</button> }
      </div>
  );
}

