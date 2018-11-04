// @flow
import * as React from 'react';

import type { Perso } from './Perso';

type Props = {
  list: Perso[],
};

const List: React.StatelessFunctionalComponent<Props> = ({ list }) => (
  <ul>
    {list.map(({ identite }) => (
      <li key={identite.name}>
        {identite.name} {identite.origine} {identite.metier} {identite.sexe}
      </li>
    ))}
  </ul>
);

export default List;
