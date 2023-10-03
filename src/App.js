import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Weather from './modules/weather/Weather'
import './App.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_WEATHER",
      payload: {
        q: "Hanoi"
      }
    })
  }, [])

  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;