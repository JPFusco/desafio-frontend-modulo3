import './style.scss';

export default function Resumo({ transacoes }) {
    const calcularValorEntrada = () => {
        let soma = 0;

        transacoes.forEach(transacao => {
            if (transacao.type === "credit") {
                soma += transacao.value;
            }
        });

        const valorEmReais = `${soma / 100}`;
        let valorEmReaisComPonto = "";

        if (valorEmReais.indexOf(".") === -1) {
            valorEmReaisComPonto = valorEmReais + ".00";
        }

        const valorEmReaisComVirgula = valorEmReaisComPonto.replace(".", ",");
        return `${valorEmReaisComVirgula}`;
    }

    const calcularValorSaida = () => {
        let soma = 0;

        transacoes.forEach(transacao => {
            if (transacao.type === "debit") {
                soma += transacao.value;
            }
        });

        const valorEmReais = `${soma / 100}`;
        let valorEmReaisComPonto = "";

        if (valorEmReais.indexOf(".") === -1) {
            valorEmReaisComPonto = valorEmReais + ".00";
        }

        const valorEmReaisComVirgula = valorEmReaisComPonto.replace(".", ",");
        return `${valorEmReaisComVirgula}`;
    }

    const calcularValorTotal = () => {
        const entrada = Number(calcularValorEntrada().replace(",", "."));
        const saida = Number(calcularValorSaida().replace(",", "."));

        const total = `${entrada - saida}`;

        let valorEmReaisComPonto = "";

        if (total.indexOf(".") === -1) {
            valorEmReaisComPonto = total + ".00";
        }

        const valorEmReaisComVirgula = valorEmReaisComPonto.replace(".", ",");
        return `${valorEmReaisComVirgula}`;
    }

    return (
        <div className="container-resume">
            <h1>Resumo</h1>
            <p className="entradas">Entradas<span className="in">R$ {calcularValorEntrada()}</span></p>
            <p className="saidas">Saídas<span className="out">R$ {calcularValorSaida()}</span></p>
            <p className="saldo">Saldo<span className="balance">R$ {calcularValorTotal()}</span></p>
        </div>
    );
}