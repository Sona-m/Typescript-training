import React  , {useContext}from 'react';
import { ThemeContext } from '../context/context';

const Box = () => {
 const value = useContext(ThemeContext);
 console.log(value)
  return (
    <div className='box'>Context {value}</div>
  )
}

export default Box;