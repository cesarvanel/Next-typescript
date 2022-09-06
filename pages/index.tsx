import type { NextPage } from 'next'
import React from 'react'
import styles ,{} from '../styles/Home.module.css'
import { Counter } from '../components/counters/counter'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

    <Counter/>
      
    </div>
  )
}

export default Home
