import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './git.css'
// import GitHub from './GitHub'
 import Movie from './Movie'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <GitHub/> */}
      <Movie/>
    </>
  )
}

export default App
