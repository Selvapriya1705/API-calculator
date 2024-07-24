
import './App.css';
import {useState} from 'react';


function App() {
  const a=[1,2,3,4,5,6,7,8,9,10];
  const [value,setValue]=useState('');
  const [AvgValue,setAvg]=useState(0);
  const l=a.length;
function prime(num){
  num.map((m,index)=>{

  })
  
}
function Even(num){
  num.map((n,index)=>{
    if(n%2==0){
      setValue(value + n);
    }
  })
}
function Fibonacci(num){

}
function Random(num){
  setValue(Math.random()*num);
}
function Avg(num){
  num.map((n,index)=>{
    setValue((AvgValue+Avg)/2);
    })
}
  return (
    <div className='container'>
      <h1 id='head'>{value}</h1>
      <div className='buttons'>
        <button onClick={()=>(prime(a))}>Prime</button>
        <button  onClick={()=>(Even(a))}>Even</button>
        <button  onClick={()=>(Fibonacci(a))}>Fibonacci</button>
        <button  onClick={()=>(Random(a))}>Random</button>
        <button  onClick={()=>(Avg(a))}>Average</button>
      </div>
    </div>
  );
}

export default App;

