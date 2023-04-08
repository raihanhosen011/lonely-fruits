import React from 'react'
//
import Hero from './partials/Hero'
import Root from './partials/Root'
import Core from './partials/Core'
import Space from './partials/Space'
import Header from '@widgets/Header/Header'


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Root />
      <Core />
      <Space />
    </>
  )
}

export default Home