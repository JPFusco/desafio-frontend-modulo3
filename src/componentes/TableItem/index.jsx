import './style.scss';
import lapis from '../../assets/lapis.svg';
import lixeira from '../../assets/lixeira.svg';
import ModalConfirmarDelete from '../ModalConfirmarDelete';
import { useState } from 'react';

export default function TableItem({ data, diaSemana, descricao, categoria, valor }) {
    const [excluindo, setExcluindo] = useState(false);

    const handleClick = () => {
        excluindo ? setExcluindo(false) : setExcluindo(true);
    }

    return (
        <div className="table-line">
            <span className="data">{data}</span>
            <span className="dia-semana">{diaSemana}</span>
            <span className="descricao">{descricao}</span>
            <span className="categoria">{categoria}</span>
            <span className="valor">{valor}</span>
            <div className="buttons">
                <button className="lapis"><img src={lapis} alt="Editar item" /></button>
                <button className="lixeira">
                    <img src={lixeira} alt="Apagar item" onClick={() => handleClick()} />
                    {excluindo && <ModalConfirmarDelete setExcluindo={setExcluindo} />}
                </button>
            </div>
        </div>
    );
}