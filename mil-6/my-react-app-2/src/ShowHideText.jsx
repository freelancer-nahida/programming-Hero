import { useState } from "react"

export default function ShowHideText() {
    const [showText , setShowText] = useState(false);

    const  handleToggle = () => {
        setShowText(!showText)
    }

    return(
        <div>
            <button onClick={handleToggle}>{showText ? "Hide" : "Show"}Text</button>
            { showText && <h2>Hello, React Learner</h2>}
        </div>
    );
}