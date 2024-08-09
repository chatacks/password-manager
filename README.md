# Password Manager

Este é um projeto de gerenciador de senhas desenvolvido em React. A aplicação permite que você cadastre e gerencie as informações de acesso de vários serviços online, como provedores de e-mail, redes sociais, e outros serviços que você usa na internet. Além disso, o gerenciador de senhas oferece funcionalidades para proteger suas informações de acesso e melhorar a usabilidade.

## Funcionalidades

- **Cadastro de Senhas**: Permite cadastrar os dados de login e senha para diferentes serviços.
- **Gerenciamento de Múltiplos Serviços**: Adicione, visualize, edite e exclua as informações de vários serviços.
- **Mostrar/Esconder Senhas**: Funcionalidade para esconder ou mostrar todas as senhas cadastradas, garantindo a privacidade das suas informações.
- **Formulário Condicional**: O formulário de cadastro de novas senhas é renderizado apenas após o usuário clicar em um botão para adicionar uma nova senha, evitando sobrecarregar a interface.

## Tecnologias Utilizadas

- **Linguagem**: Typescript
- **Framework**: React

## Estrutura do Projeto

- **src/**: Contém todo o código fonte da aplicação.
  - **components/**: Componentes reutilizáveis da aplicação, incluindo o formulário de cadastro e a lista de serviços.

## Como Executar o Projeto

1. **Clone este repositório**:

   ```bash
   git clone git@github.com:chatacks/password-manager.git
   cd password-manager
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie a aplicação**:

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:

   Abra o navegador e vá para `http://localhost:3000` para acessar o gerenciador de senhas.

## Como Utilizar

1. **Adicionar uma Nova Senha**: Clique no botão "Adicionar Nova Senha" para renderizar o formulário de cadastro.
2. **Cadastrar Serviço**: Preencha os campos com o nome do serviço, login e senha, e clique em "Salvar".
3. **Visualizar/Esconder Senhas**: Utilize o botão "Mostrar/Esconder Senhas" para alternar entre exibir e ocultar as senhas.
4. **Gerenciar Serviços**: A partir da lista de serviços cadastrados, você pode editar ou excluir qualquer entrada.

## Contribuição

Contribuições são bem-vindas! Você pode abrir issues para relatar problemas ou sugerir melhorias. Pull requests também são apreciados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

- [Documentação do React](https://reactjs.org/)
- [Documentação do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
