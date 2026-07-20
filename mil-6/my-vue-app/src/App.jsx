
import './App.css'
import ToDo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Library from './Library'

function App() {

  const actors = ['Bappa Raj' , 'omar' , 'Salman Shah' , 'salman']

const singers = [{id: 1 , name: 'Dr. Mahfuz' , age: 68},
  {id :2, name: 'Ta' , age: 78},
  {id :3, name: 'Sjjjjyguy' , age: 38}
] 

const books = [
    {id: 1, name: 'physics' , price: 250},
    {id: 2, name: 'Chemistry' , price: 350},
    {id: 3, name: 'Math' , price: 450},
    {id: 4, name: 'Biology' , price: 550},
    
]

// const time = 50;
  return (
    <>
     <h1>React Core concepts</h1> 

     <Library books={books}></Library>
     {
      singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
     }
     {
      actors.map( actor =>  <Actor actor = {actor}></Actor>)
     }
     {/* <ToDo
      task ="Learn React" 
      isDone ={true} 
      time={time}>
        </ToDo> 
     <ToDo task ="Learn js" isDone ={true} time ="100"></ToDo> 
     <ToDo task ="Learn ks" isDone ={false} time ="200"></ToDo>  */}

  
     {/* <Person></Person> */}
     {/* <Person></Person>
     <Person></Person>
     <Person></Person>
     <Sports></Sports>
     <Pet></Pet> */}
     {/* <Student></Student>
     <Developer name="bjsabjs" tech ="fddfs"></Developer>
     <Developer></Developer>
     <Player name ="ghhjf" runs ="5000"></Player>
     <Salami event="Roza eid" amount="20"></Salami>
     <Salami event="Graduation"></Salami>
     <Mobile parent="mather"></Mobile> */}
    </>
  )
}
function Mobile({parent}) {
  return(
    <div>
      <p>Mobile For:{parent}</p>
    </div>
  )
}

function Salami({event , amount =0}) {
  return(
    <div className='student'>
      <p>Salami For: {event}</p>
      <p>Amount : {amount}</p>
    </div>
  )
}


const {name , runs} = {name: 'tamim' , runs: '5000'}
function Player({name ,runs}) {
  // console.log(props);
  
  return(
    <div className='student'>
      <h3>Name {name}</h3>
      <p>Runs{runs}</p>
    </div>
  )
}

// const {name , tech} = {name:"bjsabjs", tech : "fddfs"}

function Person() {
  const age = 17;
  const name = 'jolil';

 const PersonStyle = {
  color: 'red',
  textAline:'left'
}
return(
  <p id='' title='tooltit' style={PersonStyle}>I am a person : {name} {age}</p>
)
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing  and  loosing</p>
       <ul>
      <li> kola</li>
      <li>komola</li>
    </ul>
    </div>
  )
}

function Pet() {
  return(
    <p>cat</p>
  )
}



function Student() {
  return(
  <div className='student'>
    <p>Name:</p>
    <p>Dept</p>
  </div>
  )
}

function Developer(props) {
  console.log(props);
  
  return(
 <div style={{
  border:'2px solid green',
  borderRadius:'20px'
 }}>
     <h3>Developer: {props.name}</h3>
    <p>Technology : {props.tech}</p>
    </div>
  )
}
export default App
