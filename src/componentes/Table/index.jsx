import './style.scss';
import TableItem from '../TableItem';
import { useState, useEffect } from 'react';
import setaCima from '../../assets/setaCima.svg';
import setaBaixo from '../../assets/setaBaixo.svg';

export default function Table({ titulo, setRegistrando, dadosModal, transacoes, setTransacoes, setAtualizar }) {
    const [ordenandoData, setOrdenandoData] = useState("");
    const [ordenandoDia, setOrdenandoDia] = useState("");
    const [ordenandoValor, setOrdenandoValor] = useState("");

    useEffect(() => {
        if (ordenandoDia !== "" || ordenandoValor !== "") {
            return;
        }

        let transacoesOrdenadasPorData = transacoes.slice();

        if (ordenandoData === "cre") {
            transacoesOrdenadasPorData = transacoesOrdenadasPorData.sort((a, b) => {
                const dateA = new Date(a.date);
                const timestampA = dateA.getTime();

                const dateB = new Date(b.date);
                const timestampB = dateB.getTime();

                return timestampA - timestampB;
            });
        }

        if (ordenandoData === "dec") {
            transacoesOrdenadasPorData = transacoesOrdenadasPorData.sort((a, b) => {
                const dateA = new Date(a.date);
                const timestampA = dateA.getTime();

                const dateB = new Date(b.date);
                const timestampB = dateB.getTime();

                return timestampB - timestampA;
            });
        }

        setTransacoes(transacoesOrdenadasPorData);

        if (!ordenandoData) {
            setAtualizar(Math.random());
            return;
        }

        // eslint-disable-next-line
    }, [ordenandoData]);

    useEffect(() => {
        if (ordenandoData !== "" || ordenandoValor !== "") {
            return;
        }

        let transacoesOrdenadasPorDia = transacoes.slice();

        if (ordenandoDia === "cre") {
            transacoesOrdenadasPorDia = transacoesOrdenadasPorDia.sort((a, b) => {
                const dateA = new Date(a.date);
                const diaA = dateA.getDay();

                const dateB = new Date(b.date);
                const diaB = dateB.getDay();

                return diaA - diaB;
            });
        }

        if (ordenandoDia === "dec") {
            transacoesOrdenadasPorDia = transacoesOrdenadasPorDia.sort((a, b) => {
                const dateA = new Date(a.date);
                const diaA = dateA.getDay();

                const dateB = new Date(b.date);
                const diaB = dateB.getDay();

                return diaB - diaA;
            });
        }

        setTransacoes(transacoesOrdenadasPorDia);

        if (!ordenandoDia) {
            setAtualizar(Math.random());
            return;
        }

        // eslint-disable-next-line
    }, [ordenandoDia]);

    useEffect(() => {
        if (ordenandoData !== "" || ordenandoDia !== "") {
            return;
        }

        let transacoesOrdenadasPorValor = transacoes.slice();

        if (ordenandoValor === "cre") {
            transacoesOrdenadasPorValor = transacoesOrdenadasPorValor.sort((a, b) => {
                return a.value - b.value;
            });
        }

        if (ordenandoValor === "dec") {
            transacoesOrdenadasPorValor = transacoesOrdenadasPorValor.sort((a, b) => {
                return b.value - a.value;
            });
        }

        setTransacoes(transacoesOrdenadasPorValor);

        if (!ordenandoValor) {
            setAtualizar(Math.random());
            return;
        }

        // eslint-disable-next-line
    }, [ordenandoValor]);

    const dataFormatada = (data) => {
        const dataFormatada = new Date(data);
        const dia = `${dataFormatada.getDate(data)}`.padStart(2, "0");
        const mes = `${dataFormatada.getMonth(data) + 1}`.padStart(2, "0");
        const ano4Digitos = dataFormatada.getFullYear(data);
        const ano4DigitosArray = `${ano4Digitos}`.split("");
        const ano2Digitos = `${ano4DigitosArray[2]}${ano4DigitosArray[3]}`

        return `${dia}/${mes}/${ano2Digitos}`;
    }

    const diaDaSemana = (dia) => {
        return dia[0].toUpperCase() + dia.slice(1);
    }

    const valorFormatado = (valor) => {
        const valorEmReais = `${valor / 100}`;
        let valorEmReaisComPonto = "";
        if (valorEmReais.indexOf(".") === -1) {
            valorEmReaisComPonto = valorEmReais + ".00";
        }
        const valorEmReaisComVirgula = valorEmReaisComPonto.replace(".", ",");
        return `R$ ${valorEmReaisComVirgula}`;
    }

    const handleOrdenarData = () => {
        setOrdenandoDia("");
        setOrdenandoValor("");

        ordenandoData === "cre" ?
            setOrdenandoData("dec") : ordenandoData === "dec" ?
                setOrdenandoData("") : setOrdenandoData("cre");
    }

    const handleOrdenarDia = () => {
        setOrdenandoData("");
        setOrdenandoValor("");

        ordenandoDia === "cre" ?
            setOrdenandoDia("dec") : ordenandoDia === "dec" ?
                setOrdenandoDia("") : setOrdenandoDia("cre");
    }

    const handleOrdenarValor = () => {
        setOrdenandoData("");
        setOrdenandoDia("");

        ordenandoValor === "cre" ?
            setOrdenandoValor("dec") : ordenandoValor === "dec" ?
                setOrdenandoValor("") : setOrdenandoValor("cre");
    }

    return (
        <div className="table">
            <div className="table-head">
                <span className="data" id="date" onClick={handleOrdenarData}>
                    Data
                    <img
                        src={ordenandoData === "cre" ? setaCima : ordenandoData === "dec" ? setaBaixo : ""}
                        alt={
                            ordenandoData === "cre" ?
                                "Ordem Crescente" : ordenandoData === "Ordem Decrescente" ?
                                    setaCima : ""
                        }
                    />
                </span>
                <span className="dia-semana" id="week-day" onClick={handleOrdenarDia}>
                    Dia da semana
                    <img
                        src={ordenandoDia === "cre" ? setaCima : ordenandoDia === "dec" ? setaBaixo : ""}
                        alt={
                            ordenandoDia === "cre" ?
                                "Ordem Crescente" : ordenandoDia === "Ordem Decrescente" ?
                                    setaCima : ""
                        }
                    />

                </span>
                <span className="descricao">
                    Descrição
                </span>
                <span className="categoria">
                    Categoria
                </span>
                <span className="valor" id="value" onClick={handleOrdenarValor}>
                    Valor
                    <img
                        src={ordenandoValor === "cre" ? setaCima : ordenandoValor === "dec" ? setaBaixo : ""}
                        alt={
                            ordenandoValor === "cre" ?
                                "Ordem Crescente" : ordenandoValor === "Ordem Decrescente" ?
                                    setaCima : ""
                        }
                    />
                </span>
            </div>
            {transacoes.map(transacao => {
                return <TableItem
                    data={dataFormatada(transacao.date)}
                    diaSemana={diaDaSemana(transacao.week_day)}
                    descricao={transacao.description}
                    categoria={transacao.category}
                    valor={valorFormatado(transacao.value)}
                    tipo={transacao.type}
                    id={transacao.id}
                    key={transacao.id}
                    tituloModal={titulo}
                    setRegistrando={setRegistrando}
                    dadosModal={dadosModal}
                    setAtualizar={setAtualizar}
                />
            })}
        </div>
    );
}