import {
    signInWithEmailAndPassword,
    signInWithEmailLink,
    signInWithPhoneNumber,
} from "firebase/auth";

import SignUp from './SignUp';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { use } from "react";
import {auth} from './firebase';

export default function Login() {
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [pass, setPass] = useState();

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const loginCredentialsEmail = await signInWithEmailAndPassword(
                auth,
                email,
                pass
            );

            const user = loginCredentialsEmail.user;

            if(user){
                toast.success("Signed in successfully!");
            }

            navigate("/DashBoard");

        } 
        catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <ToastContainer position="top-right"/>
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

            <p>login with number instead</p>

            <Button type="submit" color="primary">Login</Button>

            <p className="ask-for-account">Don't have an account?</p>
            <Button color="link" size="sm" onClick={()=>{navigate("/SignUp")}}>SignUp</Button>
        </Form>
    </div>
  );
}