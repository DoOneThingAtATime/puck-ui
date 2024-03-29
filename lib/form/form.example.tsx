import * as React from 'react';
import Form, { FormValue } from './form';
import { Fragment, useState } from 'react';
import Validator from './validator';
import Button from '../button/button';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'guakun',
    password: ''
  });
  const [fields] = useState([
    { name: 'username', label: '营业执照号码', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } }
  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: 'username', required: true },
      { key: 'username', minLength: 8, maxLength: 16 },
      { key: 'username', pattern: /^[A-Za-z0-9]+$/ },
      { key: 'password', required: true }
    ];
    console.log(formData);
    const errors = Validator(formData, rules);
    console.log('errors');
    console.log(errors);
    setErrors(errors)
  };
  return (
    <div>
      <div>{JSON.stringify(formData)}</div>
      <Form value={formData} fields={fields}
            buttons={
              <Fragment>
                <Button level="important" type="submit">提交</Button>
                <Button>返回</Button>
              </Fragment>
            }
            errors={errors}
            onChange={(newVal) => setFormData(newVal)}
            onSubmit={onSubmit}/>
    </div>

  );
};

export default FormExample;
