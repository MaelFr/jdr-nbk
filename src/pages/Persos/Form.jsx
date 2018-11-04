// @flow
import * as React from 'react';
import { useState } from 'react';

import { sexes } from './Perso';
import type { Identite, Perso } from './Perso';

type Props = {
  onSubmit: Identite => void,
};

function PersosForm({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [origine, setOrigine] = useState('');
  const [metier, setMetier] = useState('');
  const [sexe, setSexe] = useState(sexes.Unknown);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const identite = { name, origine, metier, sexe };
    onSubmit(identite);
  }

  /*   handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  }; */

  /* handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }; */

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Origine:
        <input
          name="origine"
          value={origine}
          onChange={e => setOrigine(e.target.value)}
        />
      </label>
      <label>
        Métier:
        <input
          name="metier"
          value={metier}
          onChange={e => setMetier(e.target.value)}
        />
      </label>
      <label>
        Sexe:
        <select onChange={e => setSexe(e.target.value)}>
          {Object.keys(sexes).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default PersosForm;
