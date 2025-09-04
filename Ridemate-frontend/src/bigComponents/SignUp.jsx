import React, { useState } from "react";
import { auth } from "./firebase";
import "./Components.css";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [Name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  const handleSignUp = async (e) =>{
    e.preventDefault();
    try{
        const credentials = await createUserWithEmailAndPassword(auth,email,pass);
        const user = credentials.user;
        if(user){
            toast.success("User Registered Successfully!");
        }
    }
    catch(error){
        console.log(error.message);
        toast.error(error.message);
    }

  }

  return (
    <>
      <ToastContainer position="top-center"/>
      
      <Form onSubmit={handleSignUp}>
        <h3 style={{ textAlign: "center" }}>SignUp</h3>
        <hr></hr>

        <FormGroup>
          <Label for="Name">Name:</Label>
          <Input
            type="text"
            name="Name"
            value={Name}
            id="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label for="pass">Password:</Label>
          <Input
            type="password"
            name="pass"
            value={pass}
            id="pass"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          ></Input>
        </FormGroup>

        <Button type="submit" color="primary">
          SignUp
        </Button>

        <div style={{ display: "flex" }}>
          <p style={{ color: "gray", fontSize: "0.9rem" }}>have an account?</p>
          <Button
            color="link"
            size="sm"
            onClick={() => {
              navigate("/Login");
            }}
            style={{ position: "relative", bottom: "8px" }}>
            Login
          </Button>
        </div>
      </Form>
    </>
  );
}

export default SignUp;
