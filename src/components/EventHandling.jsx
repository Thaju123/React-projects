import "./EV.css"
export const EventHandling=()=>{

 const handleButton=(event)=>{ 
    // console.log(event);
    //  console.log(event.type); console.log(event.target);
    alert("Button clicked");
    }

    const handleuser=(user)=>{
        console.log(`Welcome ${user}`)
    }
    return(
        <>
        <button onClick={handleButton}>submit </button>
        <button onClick={()=>handleButton()}>submit 2</button>
        <button onClick={()=>alert("cliked me 3")}>submit 3</button>
        <button onClick={()=>handleuser("Thaju")}>users button</button>



            </>
    )

}