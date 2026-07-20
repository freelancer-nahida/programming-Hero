import { useEffect, useState } from "react"


export default function Players() {

    const [Players , setPlayer] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayer(data));
    },[])


    return (

        <div className="card">
            <h4>Players{Players.length}</h4>
           <ol>
             {
                Players.map(Players => <li>{Players.name}</li>)
            }
           </ol>
        </div>
    )



}