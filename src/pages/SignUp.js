import React, { useState } from "react";
import { Link } from "react-router-dom";
import { miApiCall } from "../util/apiWrapper";

import Logo from "../img/chat.png";

function SignUp() {
    const [signUpData, setSignUpData] = useState({});

    const handleSignUp = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        console.log(Object.fromEntries(formData));
        fetch("http://localhost:5000/users/addUser", {
            body: JSON.stringify(Object.fromEntries(formData)),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
            <div className="right-login sign-up">
                <h1>SIGN UP</h1>
                <form onSubmit={handleSignUp} method="post">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" />
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <button type="submit" name="submit">
                        Submit
                    </button>
                </form>
                <p>
                    <Link className="login-link" to="/login">
                        Login to Existing Account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
