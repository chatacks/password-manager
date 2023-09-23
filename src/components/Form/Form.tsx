function Form() {
  return (
    <form action="">
      <div>
        <label htmlFor="service">Nome do serviço</label>
        <input type="text" name="" id="service" />
      </div>

      <div>
        <label htmlFor="login">Login</label>
        <input type="text" name="" id="login" />
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input type="password" name="" id="password" />
      </div>

      <div>
        <label htmlFor="url">URL</label>
        <input type="text" name="" id="url" />
      </div>

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
