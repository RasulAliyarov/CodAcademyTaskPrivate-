import { useEffect, useReducer, useState } from "react";
import TimerStyle from "./Timer.scss"
import reduce from "./reduce";

const ActionValue = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  btn: false
}

function App() {
  let [state, dispatch] = useReducer(reduce, ActionValue)
  var timer
  useEffect(() => {
    timer = state.btn ? setInterval(() => {
      dispatch({ type: "START", payload: 1 })
    }, 1000) : null

    return () => clearInterval(timer)
  })
  console.log(state.minutes)
  function Start() {
    dispatch({ type: "START", payload: true })
  }
  let valur
  function Stop() {
    dispatch({ type: "STOP", payload: false })
    clearInterval(timer)
    valur = (state.hours, state.minutes, state.seconds)

    console.log(valur)
  }

  function Reset() {
    dispatch({ type: "RESET", payload: (0, false) })
    clearInterval(timer)
  }

  return (
    <div className="timer">
      <div className="timer__time">
        <span className="hours">{state.hours < 10 ? "0" + state.hours : state.hours}</span>
        <span className="dods">:</span>
        <span className="minutes">{state.minutes < 10 ? "0" + state.minutes : state.minutes}</span>
        <span className="dods">:</span>
        <span className="seconds">{state.seconds < 10 ? "0" + state.seconds : state.seconds}</span>
      </div>
      <div className="timer__buttons">
        <div>
        <button className="timer__buttons__stop" onClick={() => Stop()}>Stop</button>
        </div>
        <div>
        <button className="timer__buttons__reset" onClick={() => Reset()}>Reset</button>
        </div>
        <div>

        <button className="timer__buttons__start" onClick={() => Start()}>Start</button>
        </div>
      </div>
    </div >
  );
}

export default App;
