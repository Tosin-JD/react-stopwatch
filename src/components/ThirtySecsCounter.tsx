interface CountProp {
  count: number
}

function ThirtySecsCounter({count}: CountProp){
  return (
    <div>{ count }</div>
  );
}


export default ThirtySecsCounter;
