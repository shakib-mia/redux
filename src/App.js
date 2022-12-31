import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice';
import Button from './components/Button/Button';

function App() {
  const {counter} = useSelector(state => state);
  const dispatch = useDispatch();  
  
  return (
    <div className="App">
      <h1 className='text-2xl text-black'>{counter.value}</h1>
      <Button className='bg-[#e31c58] text-white px-3 py-2 rounded-[5px] mr-2' onclick={() => dispatch(decrement())} text="decrement" />
      <Button className='bg-[#0ae715] px-3 py-2 rounded-[5px]' text="Increment" onclick={() => dispatch(increment())} />
      
    </div>
  );
}

export default App;
