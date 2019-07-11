import * as React from 'react';
import { ReactFragment } from 'react';
import { FormErrors } from './validator';
import Input from '../input/input';
import classes from '../helper/classes';
import './form.scss';

export interface FormValue {
  [K: string]: any
}

interface Props {
  value: FormValue,
  fields: Array<{ name: string, label: string, input: { type: string } }>,
  buttons: ReactFragment,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  onChange: (value: FormValue) => void
  errors: FormErrors
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValue = { ...formData, [name]: e.target.value };
    props.onChange(newFormValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <table>
        {props.fields.map(f =>
          <tr className={classes('puck-form-tr')} key={f.name}>
            <td className="puck-form-td">
                <span className="puck-form-label">
                  {f.label}
                </span>
            </td>
            <td className="puck-form-td">
              <Input className="puck-form-input" type={f.input.type} value={formData[f.name]}
                     onChange={onInputChange.bind(null, f.name)}/>
              <div>{props.errors[f.name]}</div>
            </td>
          </tr>
        )}

        <tr className="puck-form-tr">
          <td className="puck-form-td" />
          <td className="puck-form-td">
            {props.buttons}
          </td>
        </tr>

      </table>
    </form>
  );
};

export default Form;
