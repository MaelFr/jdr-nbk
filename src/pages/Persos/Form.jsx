// @flow
import * as React from 'react';

import { Perso } from './Perso';

type Props = {
  onSubmit: Perso => void,
};

type State = {
  nom: string,
};

class PersosForm extends React.Component<Props, State> {
  state = {
    nom: '',
  };

  handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { onSubmit } = this.props;
    const { nom } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom:
          <input name="nom" value={nom} onChange={this.handleInputChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default PersosForm;
