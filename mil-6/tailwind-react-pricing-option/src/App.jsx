import { Suspense, useState } from 'react'
import DaisyNav from "./component/DaisyNav/DaisyNav";
import Navbar from './Navbar/Navbar';
import PricingOption from './PricingOption/PricingOption';

const pricingPromise = fetch('/pricingData.json').then(res => res.json())

import './App.css'
import ResultChart from './component/ResultChart/ResultChart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>

        <Navbar></Navbar> 
         
    {/* <DaisyNav></DaisyNav> */}
  
    <br />
      {/* <h1 className='text-5xl underline '>insaallah cource Ses</h1> */}

    </header>
   

      <main>
        <Suspense  fallback ={<span className="loading loading-dots loading-lg"></span>}>
         <PricingOption pricingPromise={pricingPromise}></PricingOption>

        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
    
  )
}

export default App

