import React, { useState } from "react";
import { Link } from "react-router-dom";
import { miApiCall } from "../util/apiWrapper";

import Logo from "../img/chat.png";

function Login() {
    const [loginData, setLoginData] = useState({});

    const handleLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));
        fetch("http://localhost:5000/login", {
            body: JSON.stringify(Object.fromEntries(formData)),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    return (
        <div className="login-wrapper">
            <div className="logo">
                <img className="logo" src={Logo} alt="" />
            </div>
            <div className="left-login">
                <p className="welcome">Welcome to</p>
                <p className="name">MiMessenger</p>
            </div>
            <div className="right-login">
                <h1>LOGIN</h1>
                <form onSubmit={handleLogin} method="post">
                    <label htmlFor="email">Username</label>
                    <input type="text" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <button type="submit" name="submit">
                        Submit
                    </button>
                </form>
                <p>
                    <Link className="login-link" to="/signup">
                        Create New Account
                    </Link>
                </p>
            </div>
            <div className="attribution">
                {" "}
                Icons made by{" "}
                <a href="https://www.freepik.com" title="Freepik">
                    {" "}
                    Freepik{" "}
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com'
                </a>
            </div>
        </div>
    );
}

export default Login;
