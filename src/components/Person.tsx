import React from 'react';
import { GoCheckCircle, GoCircleSlash, GoKebabHorizontal } from 'react-icons/go'



type PersonProps = {
  name: {
    fname: String;
    lname: String;
  }
  names: {
    fname: String;
    lname: String;
  }[]
  status: 'Loading' | 'Success' | 'Failed'
}

const Person = (props: PersonProps) => {

  let message: any;
  if (props.status === 'Loading') {
    message = <GoKebabHorizontal />
  } else if (props.status === 'Failed') {
    message = <GoCircleSlash />
  } else {
    message = <GoCheckCircle />
  }



  return (
    <div className='friendlist'>
      <h3>{props.name.fname} {props.name.lname} </h3>
      {props.names.map((name) => {
        return (
          <div key='name.lname'>
            <div>{name.fname} {name.lname} {message}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Person