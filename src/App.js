import './resources/App.css';
import Minus from './images/minus.png'
import Plus from './images/plus.png'
import React , {useState} from 'react'
import Watch from './watch.js'

let intervalID  = null;
let clockStart = 0;

function App() {

  const [sessionSeconds , setSessionSeconds] = useState(60);
  const [sessionLength , setSessionLength] = useState(10);
  const [sessionInitialLength , setSessionInitialLength] = useState(10);


  const increaseLength = () =>{

    setSessionInitialLength((prev) => {return prev + 1});
    setSessionLength(sessionInitialLength + 1);
  }

  const decreaseLength = () =>{

    if(sessionLength === 1){
    }else{
      setSessionInitialLength((prev) => {return prev - 1});
      setSessionLength(sessionInitialLength - 1);
    }

  }

  const clearClock = () => {
      clearInterval(intervalID);
  }

  const reStart = () => {
    clearClock();
    setSessionInitialLength(10);
    setSessionLength(10);
    setSessionSeconds(60);
    clockStart = 0;
  }
  
  const startClock = () =>{

    let decrementMinute = false;
    intervalID = setInterval(() =>{

      if(clockStart === 0){
        setSessionLength((prev) =>{
          if(prev === 0){
            return sessionLength;
          }
          return prev -1;
        });
      }

      setSessionSeconds((prev) => {
        if(prev === 1){
          decrementMinute = true;
          return (60);
        }
        return(prev - 1); 
      });

      if(decrementMinute){
        setSessionLength((prev) =>{
          if(prev === 0){
            return sessionLength;
          }
          return prev -1;
        });
        decrementMinute = false;
      }

      clockStart = clockStart + 1;
    },1000);

  }

  return (
    <div className="App">

      <h1>Alkebulan Clock</h1>

      <div className='session-container' >
        <h2>Session Length</h2>

        <div className='session-lenght'>
            <img onClick={decreaseLength} src={Minus} alt="minus-sign" />
            <h3>{sessionInitialLength}</h3>
            <img onClick={increaseLength} src={Plus} alt="plus-sign" />
        </div>
        
        <Watch reStart={reStart} clearClock ={clearClock} startClock={startClock} sessionSeconds={sessionSeconds} sessionLength={sessionLength}/>
      </div>


    </div>
  );
}

export default App;
