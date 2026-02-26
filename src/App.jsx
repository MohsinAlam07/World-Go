import { Suspense } from 'react'
import './App.css'
import Countries from './componets/Countries/Countries'

const countriesPromise=fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json())


function App() {
 

  return (
    <>
      
      <Suspense fallback={ <h2>Countries are loading...</h2>}>
      <Countries countriesPromise={countriesPromise}></Countries>

      </Suspense>
      
    </>
  )
}

export default App
