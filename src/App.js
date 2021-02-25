import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[naoks, setNaoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>setNaoks(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MovieCount></MovieCount>

        {
          naoks.map(nk => <Nayok name={nk.name} key={nk.id}></Nayok>)
        }

        {/* <Nayok name='roky'></Nayok>
        <Nayok name='rakib'></Nayok>
        <Nayok name='nisad'></Nayok>
        <Nayok name='rony'></Nayok> */}
        
      </header>
    </div>
  );
}

function MovieCount() {
  const[count,setCount] =useState(0);
  
  const handelClick =()=>setCount(count+1);
  return(
    <div>
      <button onClick={handelClick}>Add Movies</button>
      <h3>Number of Movies : {count} </h3>
    </div>
  )
}


function Nayok(props) {
 const style={
    backgroundColor:'gray',
    padding:'15px',
    margin:'15px'
  }
  return(
    <div style={style}>
      <h3>My name : {props.name}</h3>
      <h5>I have done </h5>
    </div>
  )
}

export default App;
