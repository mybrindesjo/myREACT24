import { useState, useEffect } from "react"; 

function FetchEffect() { const [user, setUser] = useState(null); 
    
    useEffect(() => { fetch("https://jsonplaceholder.typicode.com/users/1") .then((res) => res.json()) .then((data) => setUser(data)); }, []); 
        
        return ( 
        <div> 
            <h1>API Data:</h1> {user ? <p>{user.name}</p> : <p>Laddar...</p>} 
        </div> 
        
    ); 
} 

export default FetchEffect;