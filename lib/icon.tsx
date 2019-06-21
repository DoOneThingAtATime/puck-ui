import React from 'react';
import './importIcons';
import './icon.scss';
import classes from './helper/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = props => {
  const { className, ...restProps } = props;
  return (
    <svg className={classes('puck-icon', className)} {...restProps}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  );
};

export default Icon;
