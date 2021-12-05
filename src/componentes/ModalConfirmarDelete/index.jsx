import './style.scss';

export default function ModalConfirmarDelete({ setExcluindo }) {
    const handleClickNao = () => {
        setExcluindo(false);
    }

    const handleClickSim = () => {
        //lógica para excluir o item da lista
    }

    return (
        <div className="container-confirm-delete">
            <h1>Apagar item?</h1>
            <div className="botoes">
                <button className="btn-actions-confirm-delete sim" onClick={handleClickSim}>Sim</button>
                <button className="btn-actions-confirm-delete nao" onClick={handleClickNao}>Não</button>
            </div>
        </div>
    );
}