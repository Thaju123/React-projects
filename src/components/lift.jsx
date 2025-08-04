import { useState } from "react"

export const Lift=()=>{
        const [InputValue,setInputValue]=useState("");

    return(
        <>
        <InputComponent InputValue={InputValue} setInputValue={setInputValue} />
        <DispalyComponent InputValue={InputValue} />

        </>
    )
}

const InputComponent=({InputValue,setInputValue})=>{
    return(
        <input type="text" value={InputValue} placeholder="type something" onChange={(e)=>setInputValue(e.target.value)}/>
    )
}

const DispalyComponent=({InputValue})=>{
    return(
        <p>you typed{InputValue}</p>
    )
}