import { useState } from 'react';

type FormProps = {
  displayNone: () => void
  handlePrev: (event: React.FormEvent<HTMLFormElement>) => void
};

function Form({ displayNone, handlePrev }: FormProps) {
  const [check, setCheck] = useState(false);
  const [formData, setFormData] = useState(
    { service: '', login: '', password: '', url: '' },
  );

  const isValidForm = () => {
    const name = formData.login.length > 0;
    const password = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
      .test(formData.password);
    const service = formData.service.length > 0;
    const url = formData.url.length > 0;

    if (name && password && service && url) {
      setCheck(true);
    }
  };

  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    isValidForm();
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
      {check
        ? (<button>Cadastrar</button>)
        : (<button disabled>Cadastrar</button>) }
      <button onClick={ displayNone }>Cancelar</button>
    </form>
  );
}

export default Form;
