import { useEffect } from "react"; 

function BasicEffect() { useEffect(() => { console.log("Komponenten har renderats!"); 

}); 

return (
    <>
        <h1>Kolla konsolen! 👀</h1>
    </>

);

} 
    
export default BasicEffect;
