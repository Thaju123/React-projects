import { useState } from "react"
import "./toggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";
export const ToggleSwitch=()=>{
    const[Ison,setIson]=useState(false);
    const handletoggle=()=>{
        setIson(!Ison);
    }

    return(
        <div >
        <h1 style={{textAlign:"center", marginTop:"40px"}}>Toggle-Button  <IoIosSwitch style={{color:Ison?"#4caf50":"red"}}  /></h1>
        <div className="toggle-switch" style={{backgroundColor:Ison?"#4caf50":"#ccc"}} onClick={handletoggle}>
            <div className={`switch ${Ison? "on":"off"}`}>
                <span className="switch-state">{Ison? "on":"off"}</span>
            </div>
        </div>
        </div>
    )
}