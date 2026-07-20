// import Counter from './Counter'

// import Posts from './Posts'
import Pracetice from './Pracetice'

import ShowHideText  from './ShowHideText'

import './App.css'
import { Suspense } from 'react';
import  Users from './Users'
// import Batsman from './Batsman'
// import { Suspense } from 'react'
// import Players from './Players'
// import Friends from './Friends'

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());


// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users'); return res.json();
// }

// const fetchPosts = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }
// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

function App() {

  // const friendsPromise = fetchFriends(); 

  // const postPromise = fetchPosts();

//   function handleClick(){
//     alert('I am clicked.')
//   }

// const handleClick3 = () => {
//   alert('clicked 3')
// }

// const handleAdd5 = (num) => {
//   const newNum = num + 5 ; 
//   alert(newNum);
// }

  return (
    <>
     
{/* <h1> alhamdulillah cource ses</h1> */}

 <h1>User List</h1>
 <br />

<Suspense faillback={<h2>Loading.....</h2>}>
    <Users userPromise={userPromise}></Users>
</Suspense>

<ShowHideText></ShowHideText>

<br />
{/* <Players></Players> */}

<Pracetice></Pracetice>

{/* <Suspense fallback={<h4>Posts  are coming .....</h4>}>
    <Posts postPromise={postPromise}></Posts>
</Suspense> */}

{/* <Suspense fallback={ <h3>Loading...</h3>}>
  <Users fetchUsers= {fetchUsers}></Users>
</Suspense> */}

  {/* <Suspense fallback={ <h3>Friends are coming for treat...</h3>}>
 
    <Friends friendsPromise={friendsPromise}></Friends>
  </Suspense> */}



{/* <Batsman></Batsman> */}


{/* <Counter></Counter> */}

{/* <button onclick="handleClick()">Click Me</button> */}

{/* <button onClick={handleClick}>Click Me</button>
<br /> */}

{/* <button onClick={function  handleClick2(){
  alert('click 2')
}}>Click Me 2</button>
<br />

<button onClick={handleClick3}>clicked me 3</button>

<br /> 
<button onClick= {() => alert ('alert 4')}>clicked me 4</button>
<br />

<button onClick={() => handleAdd5(5)}>click add 5</button> */}
     
    </>
  )
}

export default App  
