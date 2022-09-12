import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css"

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };
    const handleOperation = async (e) => {
        e.preventDefault();//So it doesnt refresh
        dispatch({ type: "LOGIN_START" }); //No Payload just updating loading state
        try {
            const res = await axios.post("http://localhost:8780/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
            navigate("/");

        } catch (err) {

            dispatch({ type: "LOGIN_FAILURE", payload: "Invalid Credentials" });



        }
    };
    return (
        <div className="login">
            <div className="loginContainer">
                <input type="text" placeholder="username" id="username" onChange={handleLogin} className="loginInput" />
                <input type="password" placeholder="passsword" id="password" onChange={handleLogin} className="loginInput" />
                <button disabled={loading} onClick={handleOperation} className="loginButton">Login</button>
                {error && <span>{error}</span>}
            </div>
        </div>
    );

}
