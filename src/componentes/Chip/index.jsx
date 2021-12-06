import './style.scss';
import { useEffect, useState } from 'react';

export default function Chip({ text, diasFiltrados, categoriasFiltradas, limparFiltro, setLimparFiltro }) {
    const [clickado, setClickado] = useState(false);

    useEffect(() => {
        if (limparFiltro) {
            setClickado(false);
        }
        setLimparFiltro(false);
        // eslint-disable-next-line
    }, [limparFiltro])

    const removerDoFiltro = (text) => {
        if (diasFiltrados) {
            const index = diasFiltrados.current.indexOf(text);
            diasFiltrados.current.splice(index, 1);

            return;
        }

        const index = categoriasFiltradas.current.indexOf(text);
        categoriasFiltradas.current.splice(index, 1);
    }

    const handleClick = () => {
        clickado ? setClickado(false) : setClickado(true);

        if (diasFiltrados) {
            diasFiltrados.current.includes(text) ? removerDoFiltro(text) : diasFiltrados.current.push(text);
            return;
        }

        categoriasFiltradas.current.includes(text) ? removerDoFiltro(text) : categoriasFiltradas.current.push(text);
    }

    return (
        <div className={clickado ? "icon-filter" : "container-chip"} onClick={handleClick}>
            {text}<span>{clickado ? "x" : "+"}</span>
        </div>
    );
}