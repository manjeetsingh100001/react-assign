import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUserStatus } from "../Redux/auth/actions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [FormData, setFormData] = useState({
        username: null,
        password: null
    });

    const [LogInFailed, setLogInFailed] = useState(null);

    const handleChange = (e) => {
        setFormData(
            {
                ...FormData,
                [e.target.name]: e.target.value
            }
        )
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogInFailed("Logging User In");
        fetch("https://reqres.in/api/login", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    // if credentials are wrong
                    setLogInFailed("Login Unsuccessfull");
                    return;
                }
                // store token in local storage
                localStorage.setItem("authToken", data.token);
                // change logged in status in redux store
                dispatch(checkUserStatus(data.token));
                // navigate back to the page user was tring to access
                navigate(-2, { replace: true });
            });
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name="username"
                    type={"text"}
                    placeholder="Enter username"
                ></input>
                <input
                    onChange={handleChange}
                    name="password"
                    type={"text"}
                    placeholder="Enter password"
                ></input>
                <input type={"submit"} value={"Submit"}></input>
            </form>
            {LogInFailed}
        </div>
    )
}