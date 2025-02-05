import { useState, useEffect } from "react"; 

const CleanupEffect = () => { 
    const [count, setCount] = useState(0); 
    
    useEffect(() => { console.log("Effekt startar!"); 
        
        const interval = setInterval(() => { setCount((prev) => prev + 1); }, 1000); 
        
        return () => { console.log("Effekt rensas!"); 
            
            clearInterval(interval); }; }, []); 
            
            return <h1>Räknare: {count}</h1>; } 
            
            
export default CleanupEffect;