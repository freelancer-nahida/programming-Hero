import { useState } from "react"

export default function Pracetice() {
   
const [count , setCount ] = useState(0);

const handleAdd = () =>{
    const newCount = count +1;
    setCount(newCount)
}
// const handleSub = () =>{
//     const newSub = count -1;
//     setSub(newSub)
// }
const handleSub = () => {
    const newSub = count - 1;
    setCount(newSub);
}

 const handleReset = () => {
        setCount(0);
    };
    const counterStyle={
        border:'2px solid yellow'
    }
    return(
        <div style={counterStyle}> 
            <h2>Count{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSub}>Sub</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )


}