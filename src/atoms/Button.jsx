// @flow
import * as React from 'react';

type Props = React.ElementProps<'button'>;

const Button = ({ children }: Props): React.Element<'button'> => (
  <button>{children}</button>
);

export default Button;
