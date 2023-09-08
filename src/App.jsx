import React, { useState } from 'react'
import Button from './components/Button'
import plus from './plus.svg'
import minus from './minus.svg'

function App() {
  const [count, setCount] = useState(0)

  const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        .container h1 {
          width: 50px;
          text-align: center;
        }
        .container .btn img {
          width: 25px;
          filter: invert(1);
        }
      `}</style>
      <div className="container">
        <Button
          color={'#191'}
          hoverColor={'#3b3'}
          onClick={() => setCount(count + 1)}
          style={flexCenter}
        >
          <img src={plus}></img>
        </Button>
        <h1>{count}</h1>
        <Button
          color={'#191'}
          hoverColor={'#3b3'}
          onClick={() => setCount(count - 1)}
          style={flexCenter}
        >
          <img src={minus}></img>
        </Button>
      </div>
    </>
  )
}

export default App
