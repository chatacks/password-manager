import { useState } from 'react';
import Form from './Form';
import { RegistryType } from '../../type';
// import ShowButton from './ShowButton';

function Patern() {
  const [display, setDisplay] = useState(false);
  const [receiveInfos, setReceiveInfos] = useState<RegistryType[]>([]);

  // função para controlar (display: 'none') do Form
  const handleDisplayClick = () => {
    setDisplay(!display);
  };

  const setReceive = (newRegistry: RegistryType) => {
    setReceiveInfos([...receiveInfos, newRegistry]);
  };

  return (
    <main>
      {display && <Form
        displayNone={ handleDisplayClick }
        setReceive={ setReceive }
      />}
      {display
        ? null
        : <button onClick={ handleDisplayClick }> Cadastrar nova senha</button> }
      <div>
        <ul>
          {receiveInfos.length ? (receiveInfos.map((info) => (
            <li key={ info.service }>
              <a href={ info.url }>
                {info.service}
              </a>
              <p>{info.login}</p>
              <p>{info.password}</p>
            </li>
          )))
            : ('Nenhuma senha cadastrada')}
        </ul>
      </div>
    </main>
  );
}

export default Patern;
