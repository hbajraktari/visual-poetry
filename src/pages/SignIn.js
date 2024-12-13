import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address!";
    }

    if (!password) {
      newErrors.password = "Password is required!";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long!";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      console.log("Account logged in:", { email, password });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="sign-up-sec">
      <h1>Sign In Your Account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="signup-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}

        <button type="submit" className="main-btn">
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <a href="/sign-up">Sign Up</a>
      </p>
    </div>
    </div>
  );
}

export default SignIn;
