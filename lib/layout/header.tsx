import React from 'react';
import { scopedClassMaker } from '../helper/classes';

const sc = scopedClassMaker('puck-layout');
interface Props extends React.HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props;
  return (
    <div className={sc('header', { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Header;
