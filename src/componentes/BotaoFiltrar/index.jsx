import './style.scss';
import filtro from '../../assets/filtro.svg';

export default function BotaoFiltrar() {
    return (
        <button className="open-filters-button">
            <img src={filtro} alt="Botão de filtro" />
            <span>Filtrar</span>
        </button>
    );
}