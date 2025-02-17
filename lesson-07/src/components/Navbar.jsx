import {useLocalStorage} from 'react';
const Navbar = () => {
    const [value, setValue] = useLocalStorage();
    
    return (
        <nav>
            <h1>Navbar</h1>
            <p>{value}</p>
        </nav>

        style = {
            background: 'blue',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }

        
    )
}