import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


export default function Test() {

    return (
      <div className='test'>
        
        <div className='title'>

  
        </div>
  
        <div className='addtodo'>

        <Form className="todoform">
  

        <Form.Control type='text' placeholder='Add Todo' className='textbox'></Form.Control>
        <Button variant='primary' className='addbutton'>Add Item</Button>


        </Form>
  
        </div>
  
      </div>
    )
  }