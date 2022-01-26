import React from "react";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="/login" method="post">
                <label for="username">Username</label>
                <input type="text" name="username" />
                <label for="password">Password</label>
                <input type="password" name="password" />
                <button type="submit" name="submit">
                    Submit
                </button>
            </form>
            <p>
                <a href="/register">Create New Account</a>
            </p>
        </div>
    );
}

export default Login;
