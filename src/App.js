
import './App.css';
import { useEffect, useRef } from 'react';
import Form from './components/Form';

function App() {
  const effectRun = useRef(false);//because it stops for two times rendering

  useEffect(() => {
    if(effectRun.current === false){
    const festcData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    }
    festcData();
    return () => {
      console.log('unmounted')
      effectRun.current = true;
    }
  }
  }, [])
  return (
    <div className="App">
     <Form/>
    </div>
  );
}

export default App;
