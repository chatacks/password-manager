import { useState } from 'react';
import Form from './Form';
import { RegistryType } from '../../type';
// import ShowButton from './ShowButton';

function Patern() {
  const [display, setDisplay] = useState(false);
  const [receiveInfos, setReceiveInfos] = useState<RegistryType[]>([]);
  const [isCheck, setIsCheck] = useState(false);

  // função para controlar (display: 'none') do Form
  const handleDisplayClick = () => {
    setDisplay(!display);
  };

  const handleCheckBoxClick = () => {
    setIsCheck((terms) => !terms);
  };

  const setReceive = (newRegistry: RegistryType) => {
    setReceiveInfos([...receiveInfos, newRegistry]);
  };

  const removeClick = (key: string) => {
    setReceiveInfos(() => {
      return receiveInfos.filter((infos) => infos.service !== key);
    });
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
      <section>
        <div>
          <label htmlFor="hide-password">Esconder senhas</label>
          <input
            onChange={ handleCheckBoxClick }
            checked={ isCheck }
            type="checkbox"
            name="hide-password"
            id="hide-password"
          />
        </div>
        <div>
          <ul>
            {receiveInfos.length ? (receiveInfos.map((info) => (
              <li key={ info.service }>
                <a href={ info.url }>
                  {info.service}
                </a>
                <p>{info.login}</p>
                { isCheck ? '******' : <p>{info.password}</p>}
                <div>
                  <button
                    data-testid="remove-btn"
                    onClick={ () => removeClick(info.service) }
                  >
                    Remove
                  </button>
                </div>
              </li>
            )))
              : ('Nenhuma senha cadastrada')}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Patern;
