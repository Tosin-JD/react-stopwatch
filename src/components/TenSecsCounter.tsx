interface CountProp {
  count: number
}

function TenSecsCounter({count}: CountProp){
  return (
    <div>{ count }</div>
  );
}

export default TenSecsCounter;
