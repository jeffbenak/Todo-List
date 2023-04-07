import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


export default function TodoForm(props) {

  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput("");
    
  };

    return (
      <div className='test'>
        
        <div className='addtodo'>

        <Form className="todoform" onSubmit={handleSubmit}>
  

        <Form.Control type='text' value={input} onChange={handleChange} placeholder='Add Todo' className='textbox'></Form.Control>
        <Button variant='primary' onClick={handleSubmit} className='addbutton'>Add Item</Button>


        </Form>
  
        </div>
  
      </div>
    )
  }