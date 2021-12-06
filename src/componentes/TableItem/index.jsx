import './style.scss';
import lapis from '../../assets/lapis.svg';
import lixeira from '../../assets/lixeira.svg';
import ModalConfirmarDelete from '../ModalConfirmarDelete';
import { useState } from 'react';

export default function TableItem({
    data,
    diaSemana,
    descricao,
    categoria,
    valor,
    tipo,
    id,
    tituloModal,
    setRegistrando,
    dadosModal,
    setAtualizar
}) {
    const [excluindo, setExcluindo] = useState(false);

    const handleClickLixeira = () => {
        excluindo ? setExcluindo(false) : setExcluindo(true);
    }

    const handleClickLapis = () => {
        tituloModal.current = "Editar";
        dadosModal.current.type = tipo;
        dadosModal.current.value = valor;
        dadosModal.current.category = categoria;
        dadosModal.current.date = data;
        dadosModal.current.description = descricao;
        dadosModal.current.id = id;
        setRegistrando(true);
    }

    return (
        <div className="table-line">
            <span className="data">{data}</span>
            <span className="dia-semana">{diaSemana}</span>
            <span className="descricao">{descricao}</span>
            <span className="categoria">{categoria}</span>
            <span className={tipo === "credit" ? "valor credit" : "valor debit"}>{valor}</span>
            <div className="buttons">
                <div className="lapis" onClick={handleClickLapis}>
                    <img src={lapis} alt="Editar item" />
                </div>
                <div className="lixeira">
                    <img src={lixeira} alt="Apagar item" onClick={handleClickLixeira} />
                    {excluindo &&
                        <ModalConfirmarDelete
                            setExcluindo={setExcluindo}
                            id={id}
                            setAtualizar={setAtualizar}
                        />
                    }
                </div>
            </div>
        </div>
    );
}