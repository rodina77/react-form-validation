import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function FormValidation() {
  const initialformdata={
    email:'',
    password:'',
  };
  const [formdata, setformdata] = useState({...initialformdata});

  const [error,seterror]=useState({
    email:null,
    password:null,
  })

  const emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function changeHandler(e)
  {
    if(e.target.name==='email' && !emailregx.test(e.target.value))
    {
        seterror({
          ...error,
          [e.target.name] : "you write a wrong email",
        });
    }
    else if(e.target.name==='password' && e.target.value.length <=8)
    {
      seterror({
        ...error,
        [e.target.name] : "you write a wrong password",
      });
    }
    else
    {
      seterror({
        ...error,
        [e.target.name] : null,
      })
    }
    setformdata({
      ...formdata,
       [e.target.name]: e.target.value,
      });
  }

  function submithandler(e)
  {
    e.preventDefault();
    if(!error.email&&!error.password&& emailregx.test(formdata.email) && formdata.password>8)
    {
      setformdata({
        ...initialformdata,

      });
      alert("you form submitted successfully!");

    }else
    {
      alert("you should submit correct data!");
    }


  }

  return (
    <>
    <div className='container'>
      <h1 className='p-3'>form data</h1>
    <Form onSubmit={submithandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      
        <Form.Control
         type="email"
          placeholder="Enter email"
          name='email'
          onChange={changeHandler} 
          value={formdata.email}/>
        <Form.Text className="text-muted">
      
          <div className={error.email? "bg-danger text-white" :"bg-dark text-white"}>
          {error.email? error.email:" We'll never share your email with anyone else."}
          </div>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
    
        <Form.Control type="password" placeholder="Password" name='password' onChange={changeHandler}   value={formdata.password} 
         />
         <Form.Text className="text-muted">
      <div className={error.password? "bg-danger text-white" :"bg-dark text-white"}>
          {error.password? error.password:"your password"}
          </div>
          </Form.Text>
      </Form.Group>
      
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default FormValidation;