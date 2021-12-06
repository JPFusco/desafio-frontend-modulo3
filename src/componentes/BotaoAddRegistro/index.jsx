import './style.scss';

export default function BotaoAddRegistro({ setRegistrando, titulo, dadosModal }) {
    const handleClick = () => {
        titulo.current = "Adicionar";
        for (const dado in dadosModal.current) {
            if (dado === "type") {
                dadosModal.current[dado] = "debit";
                continue;
            }
            dadosModal.current[dado] = "";
        }
        setRegistrando(true);
    }

    return (
        <button className="btn-add" onClick={handleClick}>
            Adicionar Registro
        </button>
    );
}