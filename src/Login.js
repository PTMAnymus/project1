import { useState } from "react";

const axios = require('axios');

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: ""
    });

    const handleLogout = () => {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('token');
    };

    const handleLogin = () => {
        axios.get("http://172.17.10.150/", {
            params: {
                username: loginInfo.username,
                password: loginInfo.password
            },
        })
        
            .then(function (response) {
                if(response.data.status) {
                    localStorage.setItem("refreshToken", response.data.data.refreshToken);
                    localStorage.setItem("token", response.data.data.token);
                    const refreshToken = localStorage.getItem("refreshToken");
                    if(refreshToken) {
                        console.log("OK");
                    } else {
                        console.log("No");
                    }
                }
                else {
                    console.log("Sai");
                }
            })

    }

    return (
        <>
            <input
                placeholder="Username"
                value={loginInfo.username}
                onChange={(e) => setLoginInfo({
                    ...loginInfo,
                    username: e.target.value
                })}
            />
            <br />
            <input
                placeholder="Password"
                value={loginInfo.password}
                onChange={(e) => setLoginInfo({
                    ...loginInfo,
                    password: e.target.value
                })}
            />
            <br />
            <button
                onClick={handleLogin}
            >Login</button>

            <button
                onClick={handleLogout}
            >Logout</button>
        </>
    );
}

export default Login;