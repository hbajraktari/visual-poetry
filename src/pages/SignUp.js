import React, { useState } from "react";
import "../styles/pages/_signup.css";
import images from "../assets/assets";
import "../styles/main.css";

function SignUp() {
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

      console.log("Account created:", { email, password });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="sign-up-sec">
      <h1>Sign Up Your Account</h1>
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
          Create Account
        </button>
        <button type="button" className="google-button">
          <img src={images.google} alt="Google logo" />
          Continue with Google
        </button>
      </form>
      <p>
        Already have an account? <a href="/sign-in">Log In</a>
      </p>
    </div>
    </div>
  );
}

export default SignUp;
