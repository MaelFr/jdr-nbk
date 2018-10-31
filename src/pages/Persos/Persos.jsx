// @flow
import * as React from 'react';
import { Router, Link, navigate } from '@reach/router';

import PersosForm from './Form';
import PersosList from './List';
import { Perso } from './Perso';

type Props = {};
type State = {
  persos: Perso[],
};

class Persos extends React.Component<Props, State> {
  state = {
    persos: [{ nom: 'azerty' }, { nom: 'zed' }],
  };

  addPerso = (perso: Perso) => {
    this.setState(
      ({ persos }) => ({ persos: [...persos, perso] }),
      () => {
        navigate('.');
      },
    );
  };

  render() {
    const { persos } = this.state;

    return (
      <div>
        <h2>Persos</h2>
        <nav>
          <Link to="./">List</Link> - <Link to="create">Nouveau</Link>
        </nav>
        <Router>
          <PersosList path="/" list={persos} />
          <PersosForm path="create" onSubmit={this.addPerso} />
        </Router>
      </div>
    );
  }
}

export default Persos;
