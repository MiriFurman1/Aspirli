import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const USER_REGEX: RegExp = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const REGISTER_URL = '/register';

function Register() {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(false);
  const [userFocus, setUserFocus] = useState<boolean>(false);

  const [pwd, setPwd] = useState<string>("");
  const [validPwd, setValidPwd] = useState<boolean>(false);
  const [pwdFocus, setPwdFocus] = useState<boolean>(false);

  const [matchPwd, setMatchPwd] = useState<string>("");
  const [validMatch, setValidMatch] = useState<boolean>(false);
  const [matchFocus, setMatchFocus] = useState<boolean>(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  //sets focus when app loads
  useEffect(() => {
    userRef.current?.focus();
  }, []);

  //validate user name
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  //validate user password
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  //clear err when something is changed
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
    //   const response = await axios.post(
    //     REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   console.log(response?.data);
    //   console.log(response?.accessToken);
    //   console.log(JSON.stringify(response));
    //   setSuccess(true);
    //   //clear state and controlled inputs
    //   //need value attrib on inputs for this
    //   setUser("");
    //   setPwd("");
    //   setMatchPwd("");
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (err.response?.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current?.focus();
    // }
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center p-4 mt-10">
      {success ? (
        <section>
          <h1 className="text-xl">נרשמת בהצלחה!</h1>
          <p>
          <Link to="/login" className="text-xl text-blue-500">התחבר</Link>
          </p>
        </section>
      ) : (
        <section className="w-full max-w-2xl  flex flex-col justify-start p-4 bg-mint">
          <h1 className="text-3xl text-white mb-4">הירשם</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between flex-grow pb-4"
          >
            <label htmlFor="username" className="mt-4">
              שם משתמש:
              <FontAwesomeIcon
                icon={faCheck}
                className={` ${validName ? "inline" : "hidden"}`}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hidden" : "inline"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="bg-green bg-opacity-40 p-2 rounded"
            />
            <p
              id="uidnote"
              className={`${
                userFocus && user && !validName ? "inline" : "hidden"
              } text-sm bg-green text-white p-1 mt-2`}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              4 עד 24 תווים.
              <br />
              חייב להתחיל באות.
              <br />
              אותיות, מספרים, קווים תחתונים, מקפים מותרים.
            </p>

            <label htmlFor="password" className="mt-4">
              סיסמא:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "inline" : "hidden"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hidden" : "inline"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              className="bg-green bg-opacity-40 p-2 rounded"
            />
            <p
              id="pwdnote"
              className={`${
                pwdFocus && !validPwd ? "inline" : "hidden"
              } text-sm bg-green text-white p-1 mt-2`}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              8 עד 24 תווים.
              <br />
              חייב לכלול אותיות גדולות וקטנות, מספר ותו מיוחד.
              <br />
              תווים מיוחדים מותרים: <span aria-label="exclamation mark">
                !
              </span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd" className="mt-4">
              אשר סיסמה:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "inline" : "hidden"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hidden" : "inline"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              className="bg-green bg-opacity-40 p-2 rounded"
            />
            <p
              id="confirmnote"
              className={`${
                matchFocus && !validMatch ? "inline" : "hidden"
              } text-sm bg-green text-white p-1 mt-2`}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              חייב להתאים לשדה הקלט הראשון.
            </p>

            <button
              disabled={!validName || !validPwd || !validMatch}
              className="mt-4 p-2 rounded bg-green text-white disabled:bg-gray-500"
            >
              הירשם
            </button>
          </form>
          <p>
            כבר רשום?
            <br />
            <span className="">
              <Link to="/login">התחבר</Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
}

export default Register;
