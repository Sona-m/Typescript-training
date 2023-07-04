import React from 'react';

type GreetProps = {
    name : String;
    messageCount? : number;
}

const Greet = (props : GreetProps) => {
const  {messageCount= 0} = props
  return (
    <div className='greet'>
    <div>Hello {props.name}! Welcome to React-TypeScript</div>
    <p>You have {messageCount} unread messages</p>
    </div>
    
  )
}

export default Greet