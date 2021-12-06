import './style.scss';
import TableItem from '../TableItem';

export default function Table({ titulo, setRegistrando, dadosModal, transacoes, setAtualizar }) {
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

    return (
        <div className="table">
            <div className="table-head">
                <span className="data" id="date">Data</span>
                <span className="dia-semana" id="week-day">Dia da semana</span>
                <span className="descricao">Descrição</span>
                <span className="categoria">Categoria</span>
                <span className="valor" id="value">Valor</span>
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