import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <h1 className='text-4xl'>Hello, World</h1>
    </div>
  )
}

export default App