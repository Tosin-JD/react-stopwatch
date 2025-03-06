import React from 'react';

interface TimeProp {
  timer: number;
}


function TimeCounter({timer}: TimeProp){
  console.log(timer);
  // time is 100th of a second
  // the content of the time counters goes here.
  const hour = Math.floor(timer/360000)// what is the formular to make hours
  const minute = Math.floor(timer/60000);
  const secs = Math.floor((timer % 60000) / 1000);
  const milliSeconds = (timer % 1000) ;

  return (
    <div>
      {/* {String(hour).padStart(2, '0')}: */}
      {String(minute).padStart(2, '0')}:
      {String(secs).padStart(2, '0')}:
      {String(milliSeconds).padStart(3, '0')}:
    </div>
  )
}

export default TimeCounter;
