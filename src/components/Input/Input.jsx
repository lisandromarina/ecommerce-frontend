import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const Input = ({ label, type, value, onChange, comment, name, className, extra }) => {
  return (
    <Form.Group controlId="formBasicInput" className={className}>
      <FloatingLabel controlId="floatingInput" label={label}>
        <Form.Control
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          {...extra}
        />
      </FloatingLabel>
      {comment && <Form.Text className="text-muted">{comment}</Form.Text>}
    </Form.Group>
  );
};

export default Input;