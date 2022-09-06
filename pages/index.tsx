import type { NextPage } from 'next'
import React from 'react'
import styles ,{} from '../styles/Home.module.css'
import { Counter } from '../components/counters/counter' ; 
import { CounterProvider } from '../components/context/context';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CounterProvider>
        <Counter/>
      </CounterProvider>

  
      
    </div>
  )
}

export default Home
