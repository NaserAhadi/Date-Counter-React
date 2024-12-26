import './App.css';
import {useState} from 'react'

export default function App() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date()
    date.setDate(date.getDate() + count)

    function handlePreviousStep(){
        if(step>1) setStep(s => s -1);
    }
    function handleNextStep(){
        setStep(s => s +1);
    }

    function handlePreviousCount(){
        setCount(c => c-step)
    }
    function handleNextCount(){
        setCount(c => c+step);
    }

  return (
      <div className="App">
          <div className="buttons-container">
              <button onClick={handlePreviousStep}>-</button>
              <span>Step: {step}</span>
              <button onClick={handleNextStep}>+</button>
          </div>
          <div className="buttons-container">
              <button onClick={handlePreviousCount}>-</button>
              <span>Count: {count}</span>
              <button onClick={handleNextCount}>+</button>
          </div>
          <p>
              {count===0 && <span>Today is <b className="date">{date.toDateString()}</b></span>}
              {count>0 && <span><b>{count}</b> days from Today is <b className="date">{date.toDateString()}</b> </span>}
              {count<0 && <span><b>{Math.abs(count)}</b> days ago was <b className="date">{date.toDateString()}</b> </span>}
          </p>
      </div>
  );
}

