import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import classes from '../helper/classes';
import "./button.scss"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'important' | 'danger' | 'normal'
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { className, children, level, ...rest } = props;
  return (
    <button {...rest} className={classes('puck-button', `puck-button-${level}`, className)}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  level: 'normal'
}

export default Button;
