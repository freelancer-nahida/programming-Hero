// export default function ToDo({task}) {
//     // props.task = 'js';
//     return(
//         <li>Task:{task}</li>
        
//     )
// }

// export default function ToDo({task, isDone}) {
//     if(isDone === true){
//         return <li>Done:{task}</li>
//     }

// else{
//     return<li>Do now: {task }</li>
// }
// }

// export default function ToDo({task, isDone , time = 0}) {
//     if(isDone === true){
//         return <li>Done:{task} Duaration : {time}</li>
//     }

// else{
//     return<li>Do now: {task }</li>
// }
// }

// conditional rendaring 
// condition ? true : false

// export default function ToDo({task , isDone , time = 0}) {
//    return isDone  ? 
//    <li>Done: {task} time:
//    {time}</li> : <li> Not Done: {task}</li>

// }

//conditional rendaring : 4 &&

// export default function ToDo({task , isDone , time = 0}) {
//    return isDone &&
//    <li>Done Task: {task} time: {time}</li>

// }
//conditional rendaring : 5 ||

// export default function ToDo({task , isDone , time = 0}) {
//    return isDone ||
//    <li>Done Task: {task} time: {time}</li>
   

// }
// conditional rendaring : 6 use variable

export default function ToDo({task , isDone  , time}) {

   const displayTime = time? time : 100;

   let listItem ;

  if(isDone === true){

   listItem = <li>Done:{task}  time: {time ? 'I am done' : 'not done yet'}</li>
  }
   else{
      listItem = <li> Pending:{task} </li>
   }
  return  listItem
}

