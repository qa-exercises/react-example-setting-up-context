import React, { createContext, useContext } from 'react'
import './style.css'

// 1. Create the context object with createContext().
const MyContext = createContext()

// 2. Create a parent component that provides the context value.
function MyContextProvider({ children }) {
  const contextValue = 'Hello from Context!'

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

// 3. Make sure any children that need to access the context are wrapped in the context provider.
export default function App() {
  return (
    <MyContextProvider>
      <Child />
    </MyContextProvider>
  )
}


// In the child component that consumes the context value...
function Child() {
  // 4. Use the useContext hook to access the context value.
  const contextValue = useContext(MyContext)

  return <p>{contextValue}</p>
}