// @flow
import * as React from 'react';
import { Link } from '@reach/router';

type Props = {};

const Navbar: React.StatelessFunctionalComponent<Props> = props => (
  <nav>
    <Link to="/">Home</Link> - <Link to="persos">Persos</Link>
  </nav>
);

export default Navbar;
