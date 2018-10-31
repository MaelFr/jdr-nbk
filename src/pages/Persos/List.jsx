// @flow
import * as React from 'react';

import { Perso } from './Perso';

type Props = {
  list: Perso[],
};

const List: React.StatelessFunctionalComponent<Props> = ({ list }) => (
  <ul>
    {list.map(perso => (
      <li key={perso.nom}>{perso.nom}</li>
    ))}
  </ul>
);

export default List;
