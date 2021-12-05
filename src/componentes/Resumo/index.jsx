import './style.scss';

export default function Resumo() {
    return (
        <div className="container-resume">
            <h1>Resumo</h1>
            <p className="entradas">Entradas<span className="in">R$ 200,00</span></p>
            <p className="saidas">Saídas<span className="out">R$ 70,50</span></p>
            <p className="saldo">Saldo<span className="balance">R$ 129,50</span></p>
        </div>
    );
}