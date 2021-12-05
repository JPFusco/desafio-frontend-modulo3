import './style.scss';
import Chip from '../Chip';

export default function Filtros() {
    const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const categorias = ["Contas", "Lazer", "Compras", "Alimentação", "Depósito", "TED", "Pix"];

    return (
        <div className="container-filters">
            <div className="dia-da-semana">
                <h1>Dia da semana</h1>
                <div className="dias">
                    {diasSemana.map(dia => <Chip text={dia} key={dia} />)}
                </div>
            </div>
            <div className="categoria">
                <h1>Categoria</h1>
                <div className="categorias">
                    {categorias.map(categoria => <Chip text={categoria} key={categoria} />)}
                </div>
            </div>
            <div className="valor">
                <h1>Valor</h1>
                <label htmlFor="min-value">Min</label>
                <input type="text" id="min-value" />
                <label htmlFor="max-value">Max</label>
                <input type="text" id="max-value" />
            </div>
            <div className="buttons">
                <button className="btn-clear-filters">Limpar Filtros</button>
                <button className="btn-apply-filters">Aplicar Filtros</button>
            </div>
        </div>
    );
}