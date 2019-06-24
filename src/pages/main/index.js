import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  }

  render() {
    const { repositoryInput } = this.state;
    return (
      <>
        <form onSubmit={this.handleRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (description)
            </p>
            <a href="https://github.com">Acessar</a>
          </li>
        </ul>
      </>
    );
  }
}
