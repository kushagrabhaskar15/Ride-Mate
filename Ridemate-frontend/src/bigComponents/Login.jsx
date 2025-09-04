import {
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function Login() {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [pass, setPass] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginCredentialsEmail = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const loginCredentialsPhone = await signInWithPhoneNumber(
        auth,
        phone,
        pass
      );
      const loginCredentialsEmailDirect = await signInWithEmailLink(
        auth,
        email
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <h3 style={{ textAlign: "center" }}>Login</h3>
        <hr />
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            placeholder="xyz@domain.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="pass">Password:</Label>
          <Input
            type="password"
            id="pass"
            value={pass}
            placeholder="XXXXXXXX"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></Input>
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    </div>
  );
}
