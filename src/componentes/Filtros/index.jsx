import './style.scss';
import Chip from '../Chip';
import { useRef, useState } from 'react';

export default function Filtros({ categorias, setAtualizar, transacoes, setTransacoes }) {
    const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const diasFiltrados = useRef([]);
    const categoriasFiltradas = useRef([]);
    const [limparFiltro, setLimparFiltro] = useState(false);
    const [valorMin, setValorMin] = useState("");
    const [valorMax, setValorMax] = useState("");

    const handleLimparFiltro = () => {
        diasFiltrados.current = [];
        categoriasFiltradas.current = [];
        setValorMin("");
        setValorMax("");
        setLimparFiltro(true);
        setAtualizar(Math.random());
    }

    const handleAplicarFiltro = () => {
        const transacoesFiltradas = transacoes.filter(transacao => {
            let filtroDia = false;
            let filtroCategoria = false;
            let filtroValorMin = false;
            let filtroValorMax = false;

            if (diasFiltrados.current.length > 0) {
                for (const dia of diasFiltrados.current) {
                    if (transacao.week_day.toUpperCase() === dia.toUpperCase()) {
                        filtroDia = true;
                    }
                }
            } else {
                filtroDia = true;
            }

            if (categoriasFiltradas.current.length > 0) {
                for (const categoria of categoriasFiltradas.current) {
                    if (transacao.category === categoria) {
                        filtroCategoria = true;
                    }
                }
            } else {
                filtroCategoria = true;
            }

            if (valorMin) {
                if (transacao.value >= valorMin * 100) {
                    filtroValorMin = true;
                }
            } else {
                filtroValorMin = true;
            }

            if (valorMax) {
                if (transacao.value >= valorMax * 100) {
                    filtroValorMax = true;
                }
            } else {
                filtroValorMax = true;
            }

            if (filtroDia && filtroCategoria && filtroValorMin && filtroValorMax) {
                return true;
            }

            return false;

        });

        setTransacoes(transacoesFiltradas);
    }

    return (
        <div className="container-filters">
            <div className="dia-da-semana">
                <h1>Dia da semana</h1>
                <div className="dias">
                    {diasSemana.map(dia =>
                        <Chip
                            text={dia}
                            key={dia}
                            diasFiltrados={diasFiltrados}
                            limparFiltro={limparFiltro}
                            setLimparFiltro={setLimparFiltro}
                        />)
                    }
                </div>
            </div>
            <div className="categoria">
                <h1>Categoria</h1>
                <div className="categorias">
                    {categorias.current.map(categoria =>
                        <Chip
                            text={categoria}
                            key={categoria}
                            categoriasFiltradas={categoriasFiltradas}
                            limparFiltro={limparFiltro}
                            setLimparFiltro={setLimparFiltro}
                        />)
                    }
                </div>
            </div>
            <div className="valor">
                <h1>Valor</h1>
                <label htmlFor="min-value">Min</label>
                <input type="number" id="min-value" onChange={(event) => setValorMin(event.target.value)} value={valorMin} />
                <label htmlFor="max-value">Max</label>
                <input type="number" id="max-value" onChange={(event) => setValorMax(event.target.value)} value={valorMax} />
            </div>
            <div className="buttons">
                <button className="btn-clear-filters" onClick={() => handleLimparFiltro()}>Limpar Filtros</button>
                <button className="btn-apply-filters" onClick={() => handleAplicarFiltro()}>Aplicar Filtros</button>
            </div>
        </div>
    );
}