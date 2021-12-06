import './App.scss';
import { useState, useEffect, useRef } from 'react';
import Header from './componentes/Header';
import BotaoFiltrar from './componentes/BotaoFiltrar';
import Filtros from './componentes/Filtros';
import Table from './componentes/Table';
import Resumo from './componentes/Resumo';
import BotaoAddRegistro from './componentes/BotaoAddRegistro';
import ModalRegistro from './componentes/ModalRegistro';

function App() {
  const [transacoes, setTransacoes] = useState([]);
  const [atualizar, setAtualizar] = useState(false);
  const [filtrando, setFiltrando] = useState(false);
  const [registrando, setRegistrando] = useState(false);
  const tituloModal = useRef("");
  const dadosModal = useRef({ value: '', category: '', date: '', description: '', type: 'debit', id: '' });

  const fetchTransactions = async () => {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransacoes(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [atualizar])

  return (
    <>
      <Header />
      <div className="call-to-action">
        <div className="main-elements">
          <BotaoFiltrar
            setFiltrando={setFiltrando}
            filtrando={filtrando}
          />
          {filtrando && <Filtros />}
          <Table
            titulo={tituloModal}
            setRegistrando={setRegistrando}
            dadosModal={dadosModal}
            transacoes={transacoes}
            setAtualizar={setAtualizar}
          />
          {registrando &&
            <ModalRegistro
              setRegistrando={setRegistrando}
              titulo={tituloModal}
              dadosModal={dadosModal}
              setAtualizar={setAtualizar}
            />
          }
        </div>
        <div className="side-menu">
          <Resumo transacoes={transacoes} />
          <BotaoAddRegistro
            setRegistrando={setRegistrando}
            titulo={tituloModal}
            dadosModal={dadosModal}
          />
        </div>
      </div>
    </>
  );
}

export default App;
