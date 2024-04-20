import React from 'react'

const App = () => {
  const name = 15;
  const names = ['maher', 'mohammed','mostafa']
  const loggedIn = false;
  return (
    <div>
      <div className='text-5xl'>
        App
      </div>
      <p>Hi {name}</p>
      <ul>
        {names.map((name,index)=> (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello User</h1> : <h1>Hello Guest</h1>}
    </div>
  )
}

export default App
 