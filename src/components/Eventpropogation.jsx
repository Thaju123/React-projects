
import "./EV.css"

export const Eventpropogation=()=>{
    const handleGrandparent=()=>{
        console.log("grand parent clicked")

    }
        const handleparentclick=()=>{
        console.log("parent clicked")

        
    }
        const handlechildclick=()=>{

        console.log("child clicked")

        
    };
    return(
        <section className="main">
        <div className="g_div" onClick={handleGrandparent}>
            <div className="p_div" onClick={handleparentclick}>
                <button className="c_div" onClick={handlechildclick}>
                child div
                </button>
            </div>
        </div>
        </section>
    );
}