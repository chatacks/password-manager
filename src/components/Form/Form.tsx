import { useState } from 'react';

type FormProps = {
  displayNone: () => void
  handlePrev: (event: React.FormEvent<HTMLFormElement>) => void
};

function Form({ displayNone, handlePrev }: FormProps) {
  const [validPassword, setValidPassword] = useState(false);
  const [formData, setFormData] = useState(
    { service: '', login: '', password: '', url: '' },
  );

  // validação senha
  const isValidPassword = () => {
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
      .test(formData.password);
    setValidPassword(regexPassword);
  };

  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    isValidPassword();
  };

  return (
    <form
      onSubmit={ handlePrev }
    >
      <div>
        <label htmlFor="service">Nome do serviço</label>
        <input
          onChange={ handleFormChange }
          value={ formData.service }
          type="text"
          name="service"
          id="service"
        />
      </div>

      <div>
        <label htmlFor="login">Login</label>
        <input
          onChange={ handleFormChange }
          value={ formData.login }
          type="text"
          name="login"
          id="login"
        />
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input
          onChange={ handleFormChange }
          value={ formData.password }
          type="password"
          name="password"
          id="password"
        />
        {validPassword
          ? <p style={ { color: 'green' } }> senha válida</p>
          : <p style={ { color: 'red' } }> senha inválida</p> }
      </div>

      <div>
        <label htmlFor="url">URL</label>
        <input
          onChange={ handleFormChange }
          value={ formData.url }
          type="text"
          name="url"
          id="url"
        />
      </div>

      <button>Cadastrar</button>
      <button onClick={ displayNone }>Cancelar</button>
    </form>
  );
}

export default Form;
