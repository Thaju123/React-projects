export const Eventprops=()=>{

        const handleuser=(user)=>{
        alert(`Welcome ${user}`)
    }
        const handlehover=()=>{
       alert(`thanks for hovering me `);
    }
    return(
    <>
    <Welcome onClick={()=>handleuser("Thaju")}  onMouseEnter={handlehover}/>
    
    </>
    )
}

export const Welcome=(props)=>{
    const {onclick,onMouseEnter}=props;
    const handleGreetin=()=>{
        alert("Welcome to my website");
        props.onClick();
        props.onMouseEnter();
    }
    return(
        <>
        <button onClick={props.onClick}>First Click</button>
        <button onMouseEnter={props.onMouseEnter}>Second Hover</button>
        <button onClick={handleGreetin}>Greeting</button>
        </>
    )
}