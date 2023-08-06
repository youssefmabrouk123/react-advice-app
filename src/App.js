import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [advice,setAdvice] = useState('')
  const fetchApi = () => {axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      setAdvice(response.data.slip.advice);
    })
    .catch(error => {
      console.log(error);
    });}
  useEffect(fetchApi)
  return (
    
    <div className="App">
        <p className='Head'><h5>advice</h5></p>
       <div className='Text'> <h1> {advice}</h1></div>
        <button class="button-28" role="button" onClick={fetchApi}>Other One !!!</button>    </div>
  );
}

export default App;
