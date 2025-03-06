import { useState, useEffect } from 'react'
import { useRef } from 'react'
import TimeCounter from './components/Timer';
import TenSecsCounter from './components/TenSecsCounter'
import ThirtySecsCounter from './components/ThirtySecsCounter'
import './App.css'

function App() {
  const [timerIsRunning, setTimerIsRunning] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const [tenSecsCounter, setTenSecsCounter] = useState<number>(0)
  const [thirtySecsCounter, setThirtySecsCounter] = useState<number>(0)
  const intervalReference = useRef<number | null>(null)

  let startAndStopTimer = () => {
    if(timerIsRunning){
      clearInterval(intervalReference.current);
      setTimerIsRunning(false)
    }else{
      setTimerIsRunning(true)
      intervalReference.current = setInterval(()=>{
        setTimer((prevTime)=>prevTime + 10);
      }, 10)
    }
  }

  const resetTheTime = () => {
    if (timerIsRunning){
      setTimerIsRunning(false)
      clearInterval(intervalReference.current)
    }
    setTimer(0)
    setTenSecsCounter(0)
    setThirtySecsCounter(0)
    console.log("Timer stop and reset");
  }

  //useEffect to handle the lifecycle of the component
  useEffect(()=>{
    if(timerIsRunning){
      if(timer % 10000 === 0 && timer !== 0)
        setTenSecsCounter((prevCount) => prevCount + 1)
      if (timer % 30000 === 0 && timer !== 0)
        setThirtySecsCounter((prevCount) => prevCount + 1)
    }
  }, [timer, timerIsRunning])

  return (
    <>
      <h1 className="text-color" >Stopwatch App By Oluwatosin</h1>
      <div className="center">
        <div className="row">
          <div className="col">
            {/* place holders for the timers */}
            <div className="empty-space"></div>
            <div className="text-color" ><TimeCounter timer={timer} /></div>
            <div className="col">
              <button className="green btn"
                onClick={startAndStopTimer}
                style={{ backgroundColor: timerIsRunning ? 'red' : 'green' }}
              >
                { timerIsRunning ? 'Stop' : 'Start' }
              </button>
              <button
                onClick={resetTheTime}
                className="grey btn" >
                Reset
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col counter-container">
              <div className="text-color" >10s</div>
              <div className="text-color" >
                <TenSecsCounter count={tenSecsCounter} />
              </div>
            </div>
            <div className="col counter-container">
              <div className="text-color" >30s</div>
              <div className="text-color" >
                <ThirtySecsCounter count={thirtySecsCounter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
