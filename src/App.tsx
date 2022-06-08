import React from 'react'
import Index from './pages/home/index';
import './reset.scss';
import './components/header/header.scss'
import './components/mainMenu/mainMenu.scss'
import './components/searchForm/searchForm.scss'
import './components/products/products.scss'
import './components/banner/banner.scss'
import './components/fashionTips/fashionTips.scss'
import './components/footer/footer.scss'

export default function App() {
  return (
    <div>
      <Index />
    </div>
  )
}