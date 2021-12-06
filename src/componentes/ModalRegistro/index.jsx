import './style.scss';
import close from '../../assets/closeBtn.svg';
import { useState } from 'react';

export default function ModalRegistro({ setRegistrando, titulo, dadosModal, setAtualizar }) {
    const [formulario, setFormulario] = useState({
        value: dadosModal.current.value,
        category: dadosModal.current.category,
        date: dadosModal.current.date,
        description: dadosModal.current.description,
        type: dadosModal.current.type
    });
    const [saidaAtivo, setSaidaAtivo] = useState(formulario.type === "debit" ? true : false);

    const handleChange = (event) => {
        setFormulario({ ...formulario, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        for (const dado in formulario) {
            if (!formulario[dado]) {
                return window.alert("Todos os campos são obrigatórios");
            }
        }

        const formatarValor = (valor) => {
            const valorApenasNumeros = valor.replace("R$", "").trim();
            const valorComPonto = valorApenasNumeros.replace(",", ".");
            return Number(valorComPonto) * 100;
        }

        const formatarData = (data, fonte) => {
            const dia = data.slice(0, 2);
            const mes = data.slice(3, 5);
            let ano = data.slice(6);

            if (ano.length === 2) {
                ano = "20" + data.slice(6);
            }

            const dataString = new Date(ano, mes - 1, dia);
            const dataPadronizada = dataString.toISOString();

            if (fonte === "date") {
                return dataPadronizada;
            }

            const diaSemana = dataString.getDay();
            const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

            return diasSemana[diaSemana];
        }

        const sendTransaction = async () => {
            const transacaoEnviada = {
                ...formulario,
                value: formatarValor(formulario.value),
                date: formatarData(formulario.date, "date"),
                week_day: formatarData(formulario.date, "week_day")
            }
            if (titulo.current === "Adicionar") {
                await fetch("http://localhost:3333/transactions", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(transacaoEnviada)
                });

                return;
            }

            await fetch(`http://localhost:3333/transactions/${dadosModal.current.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(transacaoEnviada)
            });
        }
        sendTransaction();
        setAtualizar(Math.random());
        setRegistrando(false);
    }

    const handleClick = (event) => {
        if (event.target.id === "debit-button") {
            setFormulario({ ...formulario, type: "debit" });
            return setSaidaAtivo(true);
        }
        setFormulario({ ...formulario, type: "credit" })
        return setSaidaAtivo(false);
    }

    const closeModal = () => {
        setRegistrando(false);
    }

    return (
        <div className="backdrop">
            <div className="modal-container">
                <p>
                    {titulo.current} Registro
                    <img className="close-icon" src={close} alt="Botão de fechar" onClick={closeModal} />
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="botoes">
                        <button
                            type="button"
                            className={saidaAtivo ? "btn entrada" : "btn entrada entrada-ativo"}
                            id="credit-button"
                            onClick={handleClick}
                        >
                            Entrada
                        </button>
                        <button
                            type="button"
                            className={saidaAtivo ? "btn saida saida-ativo" : "btn saida"}
                            id="debit-button"
                            onClick={handleClick}
                        >
                            Saída
                        </button>
                    </div>
                    <label htmlFor="value">Valor</label>
                    <input
                        type="text"
                        name="value" id="value"
                        value={formulario.value}
                        onChange={handleChange}
                    />
                    <label htmlFor="category">Categoria</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={formulario.category}
                        onChange={handleChange}
                    />
                    <label htmlFor="date">Data</label>
                    <input
                        type="text"
                        name="date"
                        id="date"
                        value={formulario.date}
                        onChange={handleChange}
                    />
                    <label htmlFor="description">Descrição</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={formulario.description}
                        onChange={handleChange}
                    />
                    <button className="btn-insert" type="submit">
                        Confirmar
                    </button>
                </form>
            </div>
        </div>
    );
}