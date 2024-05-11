import * as React from 'react';
import { Collection, Form, Input } from 'usetheform';


export default function Usetheform() {
  return (
    <div>
      <Form
        onInit={state => console.log('INIT', state)}
        onChange={state => console.log('CHANGE', state)}
        onSubmit={state => console.log('SUBMIT', state)}
        initialState={{ name: 'foo', color: 'BLUE', option1: 'option1' }}
      >
        <Input type="text" name=""/>
        <Input type="radio" name="color" value="BLUE"/>
        <Input type="radio" name="color" value="RED" />
        <Input type="checkbox" name="option1" value="option1" />
        <Input type="checkbox" name="option2" value="option2" />
        <button type="submit">Submit</button>
      </Form>
    </div>)
}