import { useRef, useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
// import AuthContext from "./context/AuthProvider";

import axios from '../api/axios';
const LOGIN_URL = '/auth';


function Login() {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user,pwd)
    setSuccess(true)
    // try {
    //     const response = await axios.post(LOGIN_URL,
    //         JSON.stringify({ user, pwd }),
    //         {
    //             headers: { 'Content-Type': 'application/json' },
    //             withCredentials: true
    //         }
    //     );
    //     console.log(JSON.stringify(response?.data));
    //     //console.log(JSON.stringify(response));
    //     const accessToken = response?.data?.accessToken;
    //     const roles = response?.data?.roles;
    //     setAuth({ user, pwd, roles, accessToken });
    //     setUser('');
    //     setPwd('');
    //     setSuccess(true);
    // } catch (err) {
    //     if (!err?.response) {
    //         setErrMsg('No Server Response');
    //     } else if (err.response?.status === 400) {
    //         setErrMsg('Missing Username or Password');
    //     } else if (err.response?.status === 401) {
    //         setErrMsg('Unauthorized');
    //     } else {
    //         setErrMsg('Login Failed');
    //     }
    //     errRef.current?.focus();
    // }
}

  return (
    <div className="w-screen flex justify-center items-center">
    {success ? (
        <section >
            <h1>התחברת בהצלחה</h1>
            <br />
            <p>
                <Link to="/">לעמוד הבית</Link>
            </p>
        </section>
    ) : (
        <section className="flex flex-col justify-center items-center p-4 mt-10  bg-mint w-full max-w-2xl">
            <p ref={errRef} className={errMsg ? "inline" : "hidden"} aria-live="assertive">{errMsg}</p>
            <h1 className="text-xl">התחבר</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="username">שם משתמש:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="bg-green bg-opacity-40 p-2 rounded"
                />

                <label htmlFor="password">סיסמא:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    className="bg-green bg-opacity-40 p-2 rounded"
                />
                <button className="mt-4 p-2 rounded bg-green text-white disabled:bg-gray-500">התחבר</button>
            </form>
            <p>
               צריך חשבון?<br />
                <span className="line">
                    <Link to="/register">הירשם</Link>
                </span>
            </p>
        </section>
    )}
</div>
)
}

export default Login;
