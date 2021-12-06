import './style.scss';
import filtro from '../../assets/filtro.svg';

export default function BotaoFiltrar({ filtrando, setFiltrando }) {
    const handleClick = () => {
        filtrando ? setFiltrando(false) : setFiltrando(true);
    }

    return (
        <button className="open-filters-button" onClick={handleClick}>
            <img src={filtro} alt="Botão de filtro" />
            <span>Filtrar</span>
        </button>
    );
}