import { useState } from 'react'
import './App.css'
import TextInput from './Components.jsx/TextInput'
import ApiGet from './Components.jsx/ApiGet'
import CardApi from './Components.jsx/CardApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/*<TextInput/>*/} 
     {/*<ApiGet/>*/}
     <CardApi/>
    </>
  )
}

export default App
