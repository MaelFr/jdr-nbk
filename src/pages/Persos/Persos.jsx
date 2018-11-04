// @flow
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Router, Link, navigate } from '@reach/router';

import { db } from '../../firebase';

import PersosForm from './Form';
import PersosList from './List';
import type { Perso, Identite } from './Perso';

type Props = {};
type State = {
  persos: Perso[],
};

function Persos() {
  const [persos, setPersos] = useState([]);
  const [changed, setChanged] = useState(false);

  // Mount
  useEffect(() => {
    db.collection('characters')
      .get()
      .then(querySnapshot => {
        const persos = [];
        querySnapshot.forEach(item => {
          persos.push({ id: item.id, ...item.data() });
        });

        setPersos(persos);
      });
  }, []);

  function addPerso(identite: Identite) {
    db.collection('characters')
      .add({ identite })
      .then(docRef => {
        setPersos([...persos, { id: docRef.id, identite }]);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }

  return (
    <React.Fragment>
      <h2>Persos</h2>
      <nav>
        <Link to="./">List</Link> - <Link to="create">Nouveau</Link>
      </nav>
      <Router>
        <PersosList path="/" list={persos} />
        <PersosForm path="create" onSubmit={addPerso} />
      </Router>
    </React.Fragment>
  );
}

export default Persos;
