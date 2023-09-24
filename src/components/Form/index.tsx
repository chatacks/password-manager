import { useState } from 'react';
import Form from './Form';
// import ShowButton from './ShowButton';

function Patern() {
  const [display, setDisplay] = useState(false);

  // função de prevent Default
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleDisplayClick = () => {
    setDisplay(!display);
  };

  return (
    <main>
      {display && <Form
        displayNone={ handleDisplayClick }
        handlePrev={ handleSubmitForm }
      />}
      {display
        ? null
        : <button onClick={ () => setDisplay(!display) }> Cadastrar nova senha</button> }
    </main>
  );
}

export default Patern;
