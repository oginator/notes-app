import "./style.css";
import Input from "../parts/Input";
import Button from "../parts/Button";
import {submit} from "../../services/Login";
import {useState} from "react";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = [
        {
            email: "react@react.com",
            password: "react1"
        },
        {
            email: "class@class.com",
            password: "react2"
        }
    ];

    return (
        <>
            <div className="login-wrapper">
                <Input 
                    fieldType="text"
                    fieldPlaceholder="Enter email address"
                    fieldOnChange={(event) => {setEmail(event.target.value)}}
                />
                <Input 
                    fieldType="password"
                    fieldPlaceholder="Enter password"
                    fieldOnChange={(event) => {setPassword(event.target.value)}}
                />

                <Button 
                    buttonOnSubmit={(submit(data, props.setIsLoggedIn, email, password))} 
                    buttonTitle="Login" 
                />
            </div>
        </>
    );
}