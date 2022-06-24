import React from 'react'
import Router from './routes'
import { GlobalStyle } from './GlobalStyle'
  
export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}