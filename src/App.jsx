import React, { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Button
          color={'#191'}
          hoverColor={'#5d5'}
          onClick={() => setCount(count + 1)}
          style={{ fontSize: '24px', lineHeight: '0.8' }}
        >
          +
        </Button>
        <h1>{count}</h1>
        <Button
          color={'#191'}
          hoverColor={'#5d5'}
          onClick={() => setCount(count - 1)}
          style={{ fontSize: '24px', lineHeight: '0.8' }}
        >
          -
        </Button>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        .container h1 {
          width: 50px;
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default App
