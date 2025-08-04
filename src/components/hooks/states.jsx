import { useState } from "react"
import "./states.css"
export const States=()=>{
    // let value=0;
    // const handleIncrement=()=>{
    //     value++;
    //     console.log(value)

    const [count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(()=>count +1)
    };

    return(
        <section className="states">
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </section>
    )
}