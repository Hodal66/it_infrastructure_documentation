import { useState } from 'react'
import './App.css'
// import PortfolioApp from './PortfolioApp'
import DocumentationApp from './DocumentationApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PortfolioApp /> */}
      <DocumentationApp />
    </>
  )
}

export default App
