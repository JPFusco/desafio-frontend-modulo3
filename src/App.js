import './App.scss';
import Header from './componentes/Header';
import BotaoFiltrar from './componentes/BotaoFiltrar';
import Filtros from './componentes/Filtros';
import Table from './componentes/Table';
import Resumo from './componentes/Resumo';
import BotaoAddRegistro from './componentes/BotaoAddRegistro';

function App() {
  return (
    <>
      <Header />
      <div className="call-to-action">
        <div className="main-elements">
          <BotaoFiltrar />
          <Filtros />
          <Table />
        </div>
        <div className="side-menu">
          <Resumo />
          <BotaoAddRegistro />
        </div>
      </div>
    </>
  );
}

export default App;
