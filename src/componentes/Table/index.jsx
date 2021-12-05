import './style.scss';
import TableItem from '../TableItem';

export default function Table() {
    return (
        <div className="table">
            <div className="table-head">
                <span className="data" id="date">Data</span>
                <span className="dia-semana" id="week-day">Dia da semana</span>
                <span className="descricao">Descrição</span>
                <span className="categoria">Categoria</span>
                <span className="valor" id="value">Valor</span>
            </div>
            <TableItem data="01/09/21"
                diaSemana="Quarta"
                descricao="Venda dos brigadeiros"
                categoria="Pix"
                valor="R$ 100,00"
                key="alterar mais tarde"
            />
        </div>
    );
}