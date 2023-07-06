import React from 'react';
type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType
}

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  return (
    <div>
      <h3>Passing component as props in typescript</h3>
      {isLoggedIn ? <Component /> : <h3>Not logged in</h3>}
    </div>
  )
}

export default Private