import './style.scss';

export default function ModalConfirmarDelete({ setExcluindo, id, setAtualizar }) {
    const handleClickNao = () => {
        setExcluindo(false);
    }

    const handleClickSim = () => {
        const deleteItem = async () => {
            await fetch(`http://localhost:3333/transactions/${id}`, {
                method: "DELETE"
            });
        }

        deleteItem();
        setExcluindo(false);
        setAtualizar(Math.random());
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