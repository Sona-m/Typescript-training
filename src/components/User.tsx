import React, { useState } from 'react'

type AuthUser = {
  name: string;
  email: string;
}

const User = () => {

  const [user, setUser] = useState<AuthUser | null>(null);
  // useState<AuthUser>({} as AuthUser) - type assertion
  const handleClick = () => {
    setUser({
      name: 'sonam',
      email: 'test@gmail.com'
    })
  }
  return (
    <div className='user'>
      <input type='text' value={user?.name} />
      <input type='email' value={user?.email} />
      <button onClick={handleClick}>Log in</button>
    </div>
  )
}

export default User