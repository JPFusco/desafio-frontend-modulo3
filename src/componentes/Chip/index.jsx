import './style.scss';
import { useState } from 'react';

export default function Chip({ text }) {
    const [clickado, setClickado] = useState(false);

    const handleClick = () => {
        clickado ? setClickado(false) : setClickado(true);
    }

    return (
        <div className={clickado ? "icon-filter" : "container-chip"} onClick={handleClick}>
            {text}<span>{clickado ? "x" : "+"}</span>
        </div>
    );
}