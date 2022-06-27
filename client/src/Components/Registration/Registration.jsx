import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {registration} from "../../actions/user";

export default function Registration () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return(
        <Form style={{width: '30%', margin: '5% auto'}} className="d-flex flex-column">
        <Form.Label><h2 style={{textAlign: "center"}}>Sign up</h2></Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email" 
            placeholder="Enter email..." />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password" 
            placeholder="Password.." />
        </Form.Group>
        <Button variant="primary" type="submit"
            onClick={() => registration(email, password)}>
          sign up
        </Button>
      </Form>
    )
}