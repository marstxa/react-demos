//Could be much better I cant lie, just use a library

import React, { useState } from "react";

function FormValidation() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const successIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="lightgreen"
      class="bi bi-check-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );

  const validate = (e) => {
    e.preventDefault();

    if (username.length < 8) {
      setErrorUsername(true);
    } else {
      setErrorUsername(false);
    }

    if (email.includes("@gmail.com")) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }

    if (password.length < 8) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }

    if (confirmPassword !== password) {
      setErrorConfirmPassword(true);
    } else {
      setErrorConfirmPassword(false);
    }
  };

  return (
    <div className="w-xl bg-base-100 flex flex-row h-auto">
      <img className="w-1/2 h-auto" src="src/assets/sign up.jpg" />
      <div className="w-1/2 h-auto">
        <form className="flex flex-col w-full items-center gap-5">
          <label className="input flex items-center gap-2 w-7/8 border-b-2 border-t-0 border-x-0 focus-within:outline-0">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            {!errorUsername && <span>{successIcon}</span>}
          </label>

          {errorUsername ? (
            <p className="text-error">
              Username must be atleast 8 characters long
            </p>
          ) : (
            !errorUsername
          )}

          <label className="input flex items-center gap-2 w-7/8 border-b-2 border-t-0 border-x-0 focus-within:outline-0">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            {!errorEmail && <span>{successIcon}</span>}
          </label>
          {errorEmail ? (
            <p className="text-error">Email must have @gmail.com</p>
          ) : (
            !errorEmail
          )}

          <label className="input flex items-center gap-2 w-7/8 border-b-2 border-t-0 border-x-0 focus-within:outline-0">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            {!errorPassword && <span>{successIcon}</span>}
          </label>

          {errorPassword ? (
            <p className="text-error">Weak Password</p>
          ) : (
            errorPassword
          )}

          <label className="input flex items-center gap-2 w-7/8 border-b-2 border-t-0 border-x-0 focus-within:outline-0">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              value={confirmPassword}
            />
            {!errorConfirmPassword && <span>{successIcon}</span>}
          </label>

          {errorConfirmPassword ? (
            <p className="text-error">Passwords arent matching</p>
          ) : (
            !errorConfirmPassword
          )}

          <button className="btn btn-primary w-24 h-12" onClick={validate}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormValidation;
