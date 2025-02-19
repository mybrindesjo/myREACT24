import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ColorPicker = () => {
    const [color, setColor] = useLocalStorage("favoriteColor", "blue");

    return (
        <div style={{ padding: "50px", backgroundColor: color }}>
            <h2>Välj din favoritfärg:</h2>
            <input 
                type="color" 
                value={color} 
                onChange={e => setColor(e.target.value)} 
            />
            <p>Din valda färg är: {color}</p>
        </div>
    );
}

export default ColorPicker;