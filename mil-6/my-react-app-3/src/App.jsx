
// import { Suspense } from 'react';
// import './App.css'
// // import Countries from './component/Countries/Countries'
// import Mosquetos from './Components/Mosquetos/Mosquatos.jsx'

// // const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());    

// const mosquetoPromise = fetch('https://mocki.io/v1/35168cd3-4e27-42b2-95ad-f2c9b3f1e49b').then(res => res.json());

// function App() {
 

//   return (
//     <>
//          {/* <Suspense fallback={<h2>Loading...</h2>}>
//         <Countries countriesPromise={countriesPromise} />
//       </Suspense> */}
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <Mosquatos mosquetoPromise={mosquetoPromise}></Mosquatos>
//       </Suspense>


//     <p>bismillahir rahmanir rohim</p>

//     <h1>InsaAllah Cource SeS</h1>
  
//     </>
//   )
// }

// export default App


import { Suspense } from "react";
import "./App.css";
import Mosques from "./Components/Mosques/Mosques";

const mosquesPromise = fetch(
  "https://mocki.io/v1/35168cd3-4e27-42b2-95ad-f2c9b3f1e49b"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>Bismillahir Rahmanir Rahim</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Mosques mosquesPromise={mosquesPromise}></Mosques>
      </Suspense>

      <h1>InshaAllah Course Shesh</h1>
    </>
  );
}

export default App;
