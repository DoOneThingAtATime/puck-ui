import React, { InputHTMLAttributes } from 'react';
import classes from '../helper/classes';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <input {...rest} className={classes('puck-input', className)}/>
  );
};

export default Input;