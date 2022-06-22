import React from 'react'
//import Index from './pages/home/index';
//import Carrinho from './pages/carrinho';
import './reset.scss';
import './components/header/header.scss'
import './components/mainMenu/mainMenu.scss'
import './components/searchForm/searchForm.scss'
import Router from './routes'

export default function App() {
  return (
    <div>
      <Router />
    </div>
  )
}