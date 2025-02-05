import { useState, useEffect } from "react"; 

function DependencyEffect() { const [count, setCount] = useState(0); 
    
    const [message, setMessage] = useState("Hej!"); 
    useEffect(() => { console.log(`Count har ändrats! Nytt värde: ${count}`); 
        }, [count]); 
        
        return ( 
        <div> 
            <h1>Räknare: {count}</h1> 
            <button onClick={() => setCount(count + 1)}>Öka</button> 
            <h2>{message}</h2> <button onClick={() => setMessage("Hej världen!")}>Ändra text</button> 
            </div> 
            
        ); 
            
        } 
            
            
export default DependencyEffect;